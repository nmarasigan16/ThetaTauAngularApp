import { Component, OnInit, OnDestroy } from '@angular/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { AttendanceService } from './attendance.service';
import { Attendance } from '../properties/props';

@Component({
  moduleId: module.id,
  selector: 'app-attendance',
  templateUrl: 'attendance.component.html',
  styleUrls: ['attendance.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MATERIAL_DIRECTIVES],
  providers: [ AttendanceService ]
})
export class AttendanceComponent implements OnInit {

  constructor(private service: AttendanceService) {}

  attendance: Attendance;
  get_subscription: any;
  update_subscription: any;

  ngOnInit() {
  	this.get_subscription = this.service.getAttendance()
  		.subscribe(
  			attendance => {
  				this.attendance = attendance;
  			});
  }

  onSubmit(){
  	this.update_subscription = this.service.updateAttendance(this.attendance.password, this.attendance.excuse)
  		.subscribe(
  			success => console.log(success)
  			);
  }

  ngOnDestroy(){
  	if(this.update_subscription){
  		this.update_subscription.unsubscribe();
  	}
  	this.get_subscription.unsubscribe();
  }

}
