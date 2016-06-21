import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interview } from '../properties/interview';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { OVERLAY_PROVIDERS } from '@angular2-material/core/overlay/overlay';

@Component({
  selector: 'interview-list',
  templateUrl: 'app/templates/interview-list.html',
  styleUrls: ['app/styles/interview-list.css'],
  directives: [ MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MATERIAL_DIRECTIVES ],
  providers: [ OVERLAY_PROVIDERS, MATERIAL_PROVIDERS]
})
export class InterviewListComponent implements OnInit {

	interviews: Interview[] = [
		{ "id": 1, "brother": "Nathan", "description": "Too cool man" }
	];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  gotoDetail(interview_id: number) {
	  console.log(interview_id)
	  let link = ['/interviews', interview_id];
	  this.router.navigate(link);
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