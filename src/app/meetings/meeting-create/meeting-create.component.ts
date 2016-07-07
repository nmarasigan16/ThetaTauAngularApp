import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TypePipe } from '../pipes/type.pipe';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { Meeting } from '../../properties/meeting';
import { MeetingService } from '../meeting.service';

@Component({
  moduleId: module.id,
  pipes: [ TypePipe ],
  selector: 'app-meeting-create',
  templateUrl: 'meeting-create.component.html',
  styleUrls: ['meeting-create.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES],
})
export class MeetingCreateComponent implements OnInit {
  meeting_types = MEETING_TYPES;

  constructor(private router:Router, private service: MeetingService) {}

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/meetings']);
  }
  onCreate(date:string, index:number, password:string){
    let type = this.meeting_types[index];
    let ndate = this.makeDate(date);
    this.service.createMeeting(ndate, type, password);
    this.router.navigate(['/meetings'])
  }
  makeDate(date:string):string{
    let month = date.slice(0,2);
    let day = date.slice(3,5);
    let year = date.slice(6,11);
    let datetime = year+month+day;
    return datetime;
  }

}

var MEETING_TYPES: any[] = [
    "None",
    "PM",
    "GM",
    "VO",
    "IN",
]
