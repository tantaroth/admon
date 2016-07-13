import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-safe',
  templateUrl: 'safe.component.html',
  styleUrls: ['safe.component.css']
})

export interface User {
  firstName: string,
  lastName: string,
  phone: number,
  email: string
}

export class SafeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    
  }

}
