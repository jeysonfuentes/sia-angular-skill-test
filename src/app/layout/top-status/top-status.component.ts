import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { PROFILES } from 'src/core/utils/auth.constants';

@Component({
  selector: 'app-top-status',
  templateUrl: './top-status.component.html',
  styleUrls: ['./top-status.component.scss']
})
export class TopStatusComponent implements OnInit {
  profiles = [{
    id: 'ADMIN',
    name: 'Administrador'
  },
  {
    id: 'READ_ONLY',
    name: 'Solo lectura'
  }
  ]
  profileSelected: string = PROFILES.ADMIN
  constructor(
    private permissionsService: NgxPermissionsService
  ) { }

  ngOnInit(): void {
  }

  changeSelect() {
    this.permissionsService.loadPermissions([this.profileSelected]);
  }

}
