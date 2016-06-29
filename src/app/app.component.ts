import { Component } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MATERIAL_DIRECTIVES} from 'ng2-material';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Action } from './properties/action';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AuthService } from './authentication.service';
import { CookieService } from 'angular2-cookie/core';
import './rxjs-operators';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MATERIAL_DIRECTIVES, MD_SIDENAV_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [ AuthService ]
})

export class AppComponent {
  title = 'app works!';
  isPledge: boolean = true;
  isOfficer: boolean = false;
  actions = ACTIONS;
  pledge_actions = PLEDGE_ACTIONS;
  officer_actions= OFFICER_ACTIONS;
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
  { "name": "Log an Interview", "description": "Submit interviews here", "link": "/interviews" },
]

var OFFICER_ACTIONS: Action[] = [
  { "name": "Meetings", "description": "Check meetings and take attendance", "link": "/meetings" },
  { "name": "Interviews", "description": "Process interviews", "link": "/interviews/check" },
  { "name": "Email", "description": "Email members", "link": "/email" },
]