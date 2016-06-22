import { Component, OnInit } from '@angular/core';
import { Interview } from '../properties/interview';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { OVERLAY_PROVIDERS } from '@angular2-material/core/overlay/overlay';

@Component({
  selector: 'interview-checklist',
  templateUrl: 'app/templates/interview-checklist.html',
  styleUrls: ['app/styles/interview-checklist.css'],
  directives: [ MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MATERIAL_DIRECTIVES ],
  providers: [ OVERLAY_PROVIDERS, MATERIAL_PROVIDERS]
})

export class InterviewChecklistComponent{
	selectedInterview: Interview;

	showDetail(interview:Interview){
		this.selectedInterview = interview;
	}

	approveClose(status:number){
		console.log(status);
	}
}