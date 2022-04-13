import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PROFILES } from 'src/core/utils/auth.constants';

@Component({
  selector: 'app-messages-search',
  templateUrl: './messages-search.component.html',
  styleUrls: ['./messages-search.component.scss'],
})
export class MessagesSearchComponent implements OnInit {
  query: string = '';
  PROFILES = PROFILES;
  @Output() refreshData = new EventEmitter();
  @Output() openNewMessage = new EventEmitter();
  @Output() export = new EventEmitter();
  @Output() filterText = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  refresh() {
    this.refreshData.emit();
  }

  addMessage() {
    this.openNewMessage.emit();
  }

  exportData() {
    this.export.emit();
  }

  filter() {
    this.filterText.emit(this.query)
  }
}
