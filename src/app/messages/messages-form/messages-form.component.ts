import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { NgxPermissionsService } from 'ngx-permissions';
import { Subscription } from 'rxjs';
import { IMessage } from 'src/core/models/message.interface';
import { MessageService } from 'src/core/services/message/message.service';
import * as appConstants from 'src/core/utils/app.constants';
import { PROFILES } from 'src/core/utils/auth.constants';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-messages-form',
  templateUrl: './messages-form.component.html',
  styleUrls: ['./messages-form.component.scss'],
})
export class MessagesFormComponent implements OnInit, OnDestroy {
  PROFILES = PROFILES;
  actionMode: string = appConstants.ACTION_MODE.NEW;
  actionsModeType = appConstants.ACTION_MODE;
  messagesFormSubscriptions$: Subscription[] = []
  message!: IMessage;
  sendToOptionSelected: number = appConstants.SEND_TO_OPTIONS[0].id;
  columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: '#',
      suppressMovable: true,
      sortable: true,
      width: 80,
    },
    {
      field: 'date',
      headerName: 'FECHA',
      suppressMovable: true,
      sortable: true,
    },
    {
      field: 'readBy',
      headerName: 'LEÍDO POR',
      suppressMovable: true,
      sortable: true,
    },
  ];
  defaultColDef: ColDef = {
    resizable: true,
  };
  history: any[] = [];
  sendToOptions: any[] = appConstants.SEND_TO_OPTIONS;
  workers: any[] = appConstants.WORKERS;

  organizationLevels: any[] = appConstants.ORGANIZATION_LEVELS;
  colResizeDefault = 'shift';
  messageForm: FormGroup;

  isGuest: boolean = false;
  private gridApi!: GridApi;
  constructor(
    private messageService: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private permissionsService: NgxPermissionsService
  ) {
    this.messageForm = new FormGroup({
      sendToOption: new FormControl(
        appConstants.SEND_TO_OPTIONS[0].id,
        Validators.required
      ),
      worker: new FormControl(''),
      organizationLevel: new FormControl(''),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      sendBy: new FormControl('', Validators.required),
      sendDate: new FormControl('', Validators.required),
    });
  }

  async ngOnInit() {
    const permissionService$ = this.permissionsService.permissions$.subscribe((response) => {
      if(response['READ_ONLY']){
        this.isGuest = true
        this.messageForm.disable()
      }else {
        this.messageForm.enable()
      }
    })
    const messageId = +this.activatedRoute.snapshot.params['id'];
    this.messageService.setMessageSelected(messageId);

    const message$ = this.messageService.stateChanged.subscribe((state) => {
      this.message = state.messageSeleted;
      if (state.messageSeleted) {
        this.history = state.messageSeleted.seen;
        this.sendToOptionSelected = state.messageSeleted.sendToOption;
        this.messageForm.patchValue({
          sendToOption: state.messageSeleted.sendToOption,
          worker: state.messageSeleted.workerId || 1,
          organizationLevel: state.messageSeleted.organizationLevelId || 1,
          title: state.messageSeleted.title,
          description: state.messageSeleted.content,
          sendBy: state.messageSeleted.sendBy,
          sendDate: state.messageSeleted.sendDate,
        });
      }
    });

    this.messagesFormSubscriptions$ = [...this.messagesFormSubscriptions$, message$, permissionService$];
  }

  ngOnDestroy(): void {
    if (this.messagesFormSubscriptions$) {
      this.messagesFormSubscriptions$.forEach((subs) => subs.unsubscribe());
    }
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  selectOption() {
    this.sendToOptionSelected =
      +this.messageForm.controls['sendToOption'].value;
  }

  sendMessage(event: any) {
    event.preventDefault();
    if (this.messageForm.valid) {
      const textAlert = this.isNewMessage()
        ? 'Desean enviar el mensaje?'
        : 'Desea editar el mensaje?';
      const buttonConfirmText = this.isNewMessage() ? 'Enviar' : 'Editar';
      Swal.fire({
        title: textAlert,
        showCancelButton: true,
        confirmButtonText: buttonConfirmText,
        showLoaderOnConfirm: true,
        preConfirm: () => {
          this.message.sendToOption =
            this.messageForm.controls['sendToOption'].value;
          const sendToOptionLabel = appConstants.SEND_TO_OPTIONS.find(
            (option) =>
              option.id === +this.messageForm.controls['sendToOption'].value
          )?.label;
          this.message.sendToName = sendToOptionLabel || '';
          this.message.title = this.messageForm.controls['title'].value;
          this.message.content = this.messageForm.controls['description'].value;
          this.message.sendBy = this.messageForm.controls['sendBy'].value;
          this.message.sendDate = this.messageForm.controls['sendDate'].value;

          this.message.workerId =
            this.messageForm.controls['worker']?.value || 0;
          this.message.organizationLevelId =
            this.messageForm.controls['organizationLevel']?.value || 0;
          if (this.isNewMessage()) {
            this.messageService.sendMessage(this.message);
          } else {
            this.messageService.editMessage(this.message);
          }
          return true;
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `Mensaje enviado`,
            text: '',
            icon: 'success',
            focusCancel: false,
          }).then(() => {
            this.router.navigateByUrl('/');
          });
        }
      });
    }
  }

  isNewMessage() {
    return this.message.id === 0;
  }

  async uploadImages(event: any) {
    let file = event.target.files[0];
    if (file.size > 2000000) {
      Swal.fire({
        icon: 'warning',
        title: 'Cuidado!',
        text: 'Debe subir una imagen de máximo 4mb',
      })
      return false;
    }
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      // await this.loadingService.show('Cargando vista previa de imagen...');

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onerror = async (error) => {
        // await this.loadingService.dismiss();
        console.log('Error: ', error);
      };

      return (reader.onload = async () => {
        // await this.loadingService.dismiss();
        this.message.image = reader.result ? reader.result.toString() : '';
      });
    } else {

      Swal.fire({
        icon: 'warning',
        title: 'Cuidado!',
        text: 'Elige una imagen de tipo JPEG o PNG',
      })
      return false
    }
  }


}
