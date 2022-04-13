import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {
  parentRoutes = [
    {
      icon: './assets/media/icon/place.svg',
      label: 'MESSAGE',
      path: '/messages'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
