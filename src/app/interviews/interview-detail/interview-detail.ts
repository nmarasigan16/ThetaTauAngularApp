import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Interview } from '../../properties/interview'

@Component({
  moduleId: module.id,
  selector: 'interview-detail',
  templateUrl: 'interview-detail.html',
  styleUrls: ['interview-detail.css'],
  directives: [MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})
export class InterviewDetailComponent implements OnInit {

  interview: Interview = { "id": 1, "pledge_id": 1, "pledge": "John", "brother": "Nathan", "description": "Too cool man" };

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  }

	goBack(){
		let link = ['/interviews'];
		this.router.navigate(link); 
	}

}