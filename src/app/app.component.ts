import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

import { PERMISSIONS_LIST } from 'src/core/utils/auth.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sia-angular-skill-test';
  constructor(
    private permissionsService: NgxPermissionsService,
    private ngxRolesService: NgxRolesService
  ) {}
  ngOnInit(): void {
    this.permissionsService.loadPermissions(['ADMIN']);

    this.ngxRolesService.addRoles({
      ADMIN: PERMISSIONS_LIST,
      READ_ONLY: ['VIEW_ALL_MESSAGES', 'EXPORT_MESSAGES'],
    });
  }
}
