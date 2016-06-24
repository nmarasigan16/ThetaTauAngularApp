import { Component, OnInit } from '@angular/core';
import { SortPipe } from '../pipes/sort.pipe';
import { TypePipe } from '../pipes/type.pipe';
import { FilterByPipe } from '../pipes/filterBy.pipe';
import { Router } from '@angular/router';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Meeting } from '../../properties/meeting';

@Component({
  moduleId: module.id,
  pipes: [ SortPipe, TypePipe, FilterByPipe ],
  selector: 'app-meeting-list',
  templateUrl: 'meeting-list.component.html',
  styleUrls: ['meeting-list.component.css'],
  directives: [ MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES ]
})
export class MeetingListComponent implements OnInit {
  public meeting_types = MEETING_TYPES;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  gotoCreate(){
    this.router.navigate(['/meetings/create'])
  }

  gotoDetail(id:number){
    this.router.navigate(['/meetings/detail', id]);
  }

  meetings: Meeting[] = [
    { "id": 1, "password": "balls", "mtype": "GM", "date": new Date(2016, 9, 12), "chapter": "KRAPPA!", "attendees": [], "excuses": [] },
  ];

}


var MEETING_TYPES: any[] = [
  "All",
	"PM",
	"GM",
	"VO",
	"IN",
]
