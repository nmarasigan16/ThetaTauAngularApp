import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-brothers',
  templateUrl: 'brothers.component.html',
  styleUrls: ['brothers.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class BrothersComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
