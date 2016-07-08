import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MeetingService } from './meeting.service';

@Component({
  moduleId: module.id,
  selector: 'meeting-component',
  template:`
  <router-outlet></router-outlet>
  `,
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ MeetingService ]
})
export class MeetingComponent{

}
