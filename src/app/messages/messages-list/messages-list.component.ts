import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { NgxPermissionsService } from 'ngx-permissions';
import { Subscription } from 'rxjs';
import { PROFILES } from 'src/core/utils/auth.constants';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
})
export class MessagesListComponent implements OnInit, OnChanges, OnDestroy {
  columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: '#',
      suppressMovable: true,
      sortable: true,
      width: 80,
    },
    {
      field: 'sendDate',
      headerName: 'FECHA',
      suppressMovable: true,
      sortable: true,
    },
    {
      field: 'sendToName',
      headerName: 'ENVIADO A',
      suppressMovable: true,
      sortable: true,
    },
    {
      field: 'title',
      headerName: 'TITULO',
      flex: 1,
      suppressMovable: true,
      sortable: true,
    },
    {
      field: 'content',
      headerName: 'CONTENIDO',
      flex: 2,
      suppressMovable: true,
      sortable: true,
    },
  ];
  PROFILES = PROFILES;
  @Input() messages: any[] = [];
  defaultColDef: ColDef = {
    resizable: true,
  };
  @Input() filterText: string = '';
  @Output() rowDoubleClick = new EventEmitter<any>();
  @Output() exportDataCSV = new EventEmitter<any>();
  colResizeDefault = 'shift';
  permissionService$!: Subscription;
  isGuest: boolean = false;
  public gridApi!: GridApi;
  constructor(private permissionsService: NgxPermissionsService) {}


  ngOnChanges(changes: SimpleChanges): void {
    if (this.gridApi) {
      this.gridApi.setQuickFilter(this.filterText);
    }
  }

  ngOnInit(): void {
    this.permissionService$ = this.permissionsService.permissions$.subscribe((response) => {
      if(response['READ_ONLY']){
        this.isGuest = true
      }else {
        this.isGuest = false
      }
    })
  }

  ngOnDestroy(): void {
    if(this.permissionService$) {
      this.permissionService$.unsubscribe()
    }
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.exportDataCSV.emit(this.gridApi)
  }

  editMessage(event: any) {
    if (!this.isGuest) {
      this.rowDoubleClick.emit(event);
    }
  }
  // export () {
  //   this.exportDataCSV.emit(this.gridApi.exportDataAsCsv())
  // }


}
