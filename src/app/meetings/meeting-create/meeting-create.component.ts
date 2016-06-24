import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TypePipe } from '../pipes/type.pipe';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { Meeting } from '../../properties/meeting';

@Component({
  moduleId: module.id,
  pipes: [ TypePipe ],
  selector: 'app-meeting-create',
  templateUrl: 'meeting-create.component.html',
  styleUrls: ['meeting-create.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES],
})
export class MeetingCreateComponent implements OnInit {
    public meeting_types = MEETING_TYPES;

  constructor() {}

  ngOnInit() {
  }

}

var MEETING_TYPES: any[] = [
    "PM",
    "GM",
    "VO",
    "IN",
]
