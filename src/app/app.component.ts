import { Component } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MATERIAL_DIRECTIVES} from 'ng2-material';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Action } from './properties/action';
import { APP_ROUTER_PROVIDERS } from './app.routes';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MATERIAL_DIRECTIVES, MD_SIDENAV_DIRECTIVES, ROUTER_DIRECTIVES],
})

export class AppComponent {
  title = 'app works!';
  actions = ACTIONS;
  selectedAction: Action;
  onSelect(action: Action) { this.selectedAction = action; }
}

var ACTIONS: Action[] = [
	{ "name": "Home", "description": "", "link": "" },
	{ "name": "Brothers", "description": "Check the brothers list", "link": "/brothers" },
	{ "name": "Events", "description": "Check the events list", "link": "/events" },
	{ "name": "Input Attendance", "description": "Put in your GM attendance password", "link": "/attendance" },
];
var PLEDGE_ACTIONS: Action[] = [
  { "name": "Log an Interview", "description": "Submit interviews here", "link": "Interview" },
]

var OFFICER_ACTIONS: Action[] = [
  { "name": "Meetings", "description": "Check meetings and take attendance", "link": "Meetings" },
  { "name": "Interviews", "description": "Process interviews", "link": "InterviewCheck" },
  { "name": "Email", "description": "Email members", "link": "Email" },
]