import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopStatusComponent } from './top-status/top-status.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TopStatusComponent, LeftNavigationComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [TopStatusComponent, LeftNavigationComponent],
})
export class LayoutModule {}
