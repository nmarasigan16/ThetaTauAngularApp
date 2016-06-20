import { Component, OnInit } from '@angular/core';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import {OVERLAY_PROVIDERS} from '@angular2-material/core/overlay/overlay';
import { InterviewListComponent } from './interview-list/interview-list.component';


@Component({
  moduleId: module.id,
  selector: 'app-interview',
  templateUrl: 'interview.component.html',
  styleUrls: ['interview.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MATERIAL_DIRECTIVES, InterviewListComponent],
  providers: [ OVERLAY_PROVIDERS, MATERIAL_PROVIDERS]
})
export class InterviewComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  addClose(val:string){
  	if(!val)
  	{
			return;
  	}
	  var idx: number = val.indexOf('`');
	  var name = val.slice(0, idx);
	  var desc = val.slice(idx + 1);
  	  console.log(name);
	  console.log(desc);
  }

}
