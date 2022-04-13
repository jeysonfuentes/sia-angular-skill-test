import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { MessagesSearchComponent } from './messages-search/messages-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesFormComponent } from './messages-form/messages-form.component';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [
    MessagesComponent,
    MessagesListComponent,
    MessagesSearchComponent,
    MessagesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    NgxPermissionsModule.forChild(),
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
