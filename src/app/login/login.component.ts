import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar'
import { AuthService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [MD_INPUT_DIRECTIVES, MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  subscription: any;

  constructor(private service: AuthService, private router: Router, private user: UserService) {
  }

  ngOnInit() {
    let loggedIn = this.user.isLoggedIn();
    if(loggedIn){
      this.router.navigate(['/brothers'])
    }
  }

  OnSubmit(username: string, password: string){
  	this.subscription = this.service.login(username, password)
    .subscribe(
      result => {
        this.user.login();
        this.router.navigate(['/brothers']);
      },
      error => console.log(error)
      );
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
