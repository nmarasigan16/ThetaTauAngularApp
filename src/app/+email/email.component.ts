import { Component, OnInit } from '@angular/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar'

@Component({
  moduleId: module.id,
  selector: 'app-email',
  templateUrl: 'email.component.html',
  styleUrls: ['email.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MATERIAL_DIRECTIVES]
})
export class EmailComponent implements OnInit {
	public sets: string[] = [
		"All",
		"Brothers",
		"Pledges",
	]

	selectedSet: string;

  constructor() {}

  ngOnInit() {
	  this.selectedSet = "All";
  }

  onChange(value){
	  console.log(value);
  }

}
