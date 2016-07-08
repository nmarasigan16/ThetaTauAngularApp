import { Component, OnInit } from '@angular/core';
import { Interview } from '../../properties/interview';
import { TypePipe } from '../pipes/type.pipe';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { OVERLAY_PROVIDERS } from '@angular2-material/core/overlay/overlay';

@Component({
  moduleId: module.id,
  selector: 'interview-checklist',
  templateUrl: 'interview-checklist.html',
  styleUrls: ['interview-checklist.css'],
  directives: [ MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MATERIAL_DIRECTIVES ],
  providers: [ OVERLAY_PROVIDERS, MATERIAL_PROVIDERS],
  pipes: [ TypePipe ]
})

export class InterviewChecklistComponent implements OnInit{
	selectedInterview: Interview;
	interviews: Interview[] = [
		{ "id": 1, "pledge_id": 1, "pledge": "John", "brother": "Nathan", "description": "Too cool man", "type": "B" },
		{ "id": 2, "pledge_id": 1, "pledge": "John", "brother": "Taylor", "description": "Neat", "type": "P" }
	];

	ngOnInit(){
		this.selectedInterview = this.interviews[0];
	}
	showDetail(interview:Interview){
		this.selectedInterview = interview;
	}

	approveClose(status:number){
		console.log(status);
	}
}