import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES }  from '@angular2-material/input';
import { Meeting } from '../../properties/meeting';
import { Excuse } from '../../properties/excuse';
import { TypePipe } from '../pipes/type.pipe';
import { OVERLAY_PROVIDERS } from '@angular2-material/core/overlay/overlay';

@Component({
  moduleId: module.id,
  pipes: [ TypePipe ],
  selector: 'app-meeting-detail',
  templateUrl: 'meeting-detail.component.html',
  styleUrls: ['meeting-detail.component.css'],
  directives: [MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES],
  providers: [ MATERIAL_PROVIDERS, OVERLAY_PROVIDERS ]
})
export class MeetingDetailComponent implements OnInit {

	meeting: Meeting = { "id": 1, "password": "balls", "mtype": "GM", "date": new Date(2016, 9, 12), "chapter": "KRAPPA!", "attendees": [], "excuses": undefined }

	excuses: Excuse[] = [
		{"id": 1, "name": "Nathan", "excuse": "exam"},
		{ "id": 1, "name": "Nathan", "excuse": "exam" },
		{ "id": 1, "name": "Nathan", "excuse": "exam" },
		{ "id": 1, "name": "Nathan", "excuse": "exam" },
		{ "id": 1, "name": "Nathan", "excuse": "exam" },

	];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  	goBack(){
		let link = ['/meetings'];
		this.router.navigate(link); 
	}

	deleteClose(status:number){
		if(status == 1){
			/** delete object **/
			console.log(status);
		}
	}
	editClose(new_pass:string){
		if(new_pass){
			console.log(new_pass);
		}
	}
	takeClose(status:number){
		if (status == 1) {
			/** take attendance **/
			console.log(status);
		}
	}
}
