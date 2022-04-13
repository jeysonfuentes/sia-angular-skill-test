import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridApi, RowDoubleClickedEvent } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/core/services/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  subscriptionMessage$: Subscription = new Subscription();
  query: string = '';
  show = false;
  gridAPI!: GridApi;
  constructor(private router: Router, private messageService: MessageService) {}


  ngOnInit(): void {
    this.subscriptionMessage$ = this.messageService.stateChanged.subscribe(
      (state) => {
        this.messages = state.messages;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscriptionMessage$) {
      this.subscriptionMessage$.unsubscribe();
    }
  }

  refreshData() {
    this.getMessages();
  }

  setFilterText(query: string) {
    this.query = query;
  }

  openNewMessage() {
    this.router.navigateByUrl('messages/new');
  }

  getGridAPI(event: GridApi) {
    this.gridAPI = event;
  }
  export() {
    this.gridAPI.exportDataAsCsv();
  }

  getMessages() {
    this.messageService.getMessages();
  }

  editMessage(event: RowDoubleClickedEvent) {
    this.messageService.setMessageSelected(event.data.id);
    this.router.navigateByUrl(`messages/edit/${event.data.id}`);
  }
}
