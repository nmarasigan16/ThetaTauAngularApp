import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MATERIAL_DIRECTIVES} from 'ng2-material';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Action } from './properties/action';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AuthService } from './services/authentication.service';
import { UrlService } from './services/url.service';
import { UserService } from './services/user.service';
import { CookieService } from 'angular2-cookie/core';
import './rxjs-operators';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MATERIAL_DIRECTIVES, MD_SIDENAV_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [ AuthService, CookieService, UrlService, UserService ]
})

export class AppComponent {
  //todo make a viewchild of dashboard, and class get user after it inits
  user: string;
  constructor(private service: UserService, private router: Router){
  }
  ngOnInit(){
    this.loggedIn = this.service.isLoggedIn();
    if(this.loggedIn){
      this.getUser();
    }
  }

  getUser(){
    this.service.getUser()
      .subscribe(
        user => {
          this.isPledge = user.status == 'P';
        }
        );
    this.service.getOfficer()
      .subscribe(
        success => this.isOfficer = true
        );

  }

  logout(){
    this.service.logout();
    this.router.navigate(['/login']);
  }

  title = 'app works!';
  loggedIn: boolean;
  isPledge: boolean = false;
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