import { Component, OnInit } from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';
import {MATERIAL_DIRECTIVES} from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Interview } from './interview'

@Component({
  moduleId: module.id,
  selector: 'app-interview-detail',
  templateUrl: 'interview-detail.component.html',
  styleUrls: ['interview-detail.component.css'],
  directives: [MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})
export class InterviewDetailComponent implements OnInit {

	interview : Interview = { "id": 1, "brother": "Nathan", "description": "Too cool man" };

  constructor(private router: Router) {}

  ngOnInit() {
  }

	goBack(){
		let link = ['Interview'];
		this.router.navigate(link); 
	}

}
