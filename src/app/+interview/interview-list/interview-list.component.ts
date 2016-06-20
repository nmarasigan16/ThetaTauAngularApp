import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import { Interview } from './interview-detail/interview.ts';
import {MATERIAL_DIRECTIVES} from 'ng2-material';

@Component({
  moduleId: module.id,
  selector: 'app-interview-list',
  templateUrl: 'interview-list.component.html',
  styleUrls: ['interview-list.component.css'],
  directives: [ MATERIAL_DIRECTIVES ],
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
	  let link = ['InterviewDetail', { id: interview_id }];
	  this.router.navigate(link);
  }

}

