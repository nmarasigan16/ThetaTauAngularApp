import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interview } from '../../properties/interview';
import { TypePipe } from '../pipes/type.pipe';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { OVERLAY_PROVIDERS } from '@angular2-material/core/overlay/overlay';

@Component({
  moduleId: module.id,
  selector: 'interview-list',
  templateUrl: 'interview-list.html',
  styleUrls: ['interview-list.css'],
  directives: [ MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MATERIAL_DIRECTIVES ],
  providers: [ OVERLAY_PROVIDERS, MATERIAL_PROVIDERS],
  pipes: [ TypePipe ]
})
export class InterviewListComponent implements OnInit {
  public interview_types = INTERVIEW_TYPES;

	interviews: Interview[] = [
		{ "id": 1, "pledge_id": 1, "pledge": "John", "brother": "Nathan", "description": "Too cool man", "type": "B" }
	];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  gotoDetail(interview_id: number) {
	  console.log(interview_id)
	  let link = ['/interviews/detail', interview_id];
	  this.router.navigate(link);
  }
  addInterview(name:string, type:string, summary:string){
    console.log(name + " " + type + " " + summary);
  }

}

var INTERVIEW_TYPES: string[] = [
  "B",
  "P",
];