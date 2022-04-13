import { MessagesFormComponent } from './messages-form/messages-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: MessagesComponent},
      { path: 'new', component: MessagesFormComponent},
      { path: 'edit/:id', component: MessagesFormComponent}
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
