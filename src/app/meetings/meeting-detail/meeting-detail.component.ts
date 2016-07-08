import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES }  from '@angular2-material/input';
import { Meeting } from '../../properties/meeting';
import { Excuse } from '../../properties/excuse';
import { TypePipe } from '../pipes/type.pipe';
import { OVERLAY_PROVIDERS } from '@angular2-material/core/overlay/overlay';
import { MeetingService } from '../meeting.service';

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

	meeting: Meeting;
	excuses: Excuse[];
	route_sub:any;
	meeting_sub:any;
	errorMessage:string;

  constructor(private router: Router, private service: MeetingService, private route: ActivatedRoute) {}

  ngOnInit() {
	this.route_sub = this.route.params.subscribe(
		params => {
			let id = params['id'];
			this.getMeeting(id)
		},
		error => console.error(error));
}

  getMeeting(id:string){
  	this.meeting_sub = this.service.getMeeting(id)
  		.subscribe(
  			meeting => {
  				this.meeting = meeting;
  				this.excuses = meeting.excuses;
  			},
  			error => this.errorMessage = error
  			);

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
			this.service.takeAttendance(this.meeting.meeting_id);
			window.location.reload();
		}
	}
	onProcess(index:number, status:number){
		let excuse = this.excuses.splice(index, 1)[0];
		this.service.approveExcuse(excuse.excuse_id, status);
	}
}
