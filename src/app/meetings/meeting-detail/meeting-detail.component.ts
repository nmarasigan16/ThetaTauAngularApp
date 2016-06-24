import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Meeting } from '../../properties/meeting';
import { Excuse } from '../../properties/excuse';
import { TypePipe } from '../pipes/type.pipe';

@Component({
  moduleId: module.id,
  pipes: [ TypePipe ],
  selector: 'app-meeting-detail',
  templateUrl: 'meeting-detail.component.html',
  styleUrls: ['meeting-detail.component.css'],
  directives: [MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})
export class MeetingDetailComponent implements OnInit {

	meeting: Meeting = { "id": 1, "password": "balls", "mtype": "GM", "date": new Date(2016, 9, 12), "chapter": "KRAPPA!", "attendees": [], "excuses": undefined }

	excuses: Excuse[] = [
		{"id": 1, "name": "Nathan", "excuse": "exam"}
	];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  	goBack(){
		let link = ['/meetings'];
		this.router.navigate(link); 
	}

}
