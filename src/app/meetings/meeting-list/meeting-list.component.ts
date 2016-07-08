import { Component, OnInit } from '@angular/core';
import { SortPipe } from '../pipes/sort.pipe';
import { TypePipe } from '../pipes/type.pipe';
import { FilterByPipe } from '../pipes/filterBy.pipe';
import { Router } from '@angular/router';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Meeting } from '../../properties/meeting';
import { MeetingService } from '../meeting.service';

@Component({
  moduleId: module.id,
  pipes: [ SortPipe, TypePipe, FilterByPipe ],
  selector: 'app-meeting-list',
  templateUrl: 'meeting-list.component.html',
  styleUrls: ['meeting-list.component.css'],
  directives: [ MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES ]
})
export class MeetingListComponent implements OnInit {
  meeting_types = MEETING_TYPES;
  subscription:any;
  meetings: Meeting[];
  errorMessage: string;

  constructor(private router: Router, private service: MeetingService) {}

  ngOnInit() {
    this.getMeetings();
  }

  getMeetings(){
    this.subscription = this.service.getMeetings()
      .subscribe(
        meetings => this.meetings = meetings,
        error => this.errorMessage = error
        )
  }

  gotoCreate(){
    this.router.navigate(['/meetings/create'])
  }

  gotoDetail(id:number){
    this.router.navigate(['/meetings/detail', id]);
  }


}


var MEETING_TYPES: any[] = [
  "All",
	"PM",
	"GM",
	"VO",
	"IN",
]
