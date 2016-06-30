import { Component, OnInit } from '@angular/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar'
import { AuthService } from '../services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [MD_INPUT_DIRECTIVES, MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})
export class LoginComponent implements OnInit {

  errorMessage: string;

  constructor(private service: AuthService) {}

  ngOnInit() {
  }

  OnSubmit(username: string, password: string){
  	this.service.login(username, password)
    .subscribe(
      result => console.log(result),
      error => console.log(error)
      );
  }

}
