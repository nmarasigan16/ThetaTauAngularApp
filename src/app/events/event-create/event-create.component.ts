import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { Event } from '../../properties/props';
import { EventService } from '../event.service';

@Component({
  moduleId: module.id,
  selector: 'app-event-create',
  templateUrl: 'event-create.component.html',
  styleUrls: ['event-create.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES],
})
export class EventCreateComponent implements OnInit {
	types = TYPES;

  constructor(private router: Router, private service: EventService) {}

  ngOnInit() {
  }

  onSubmit(input:any){
  	console.log(input);
  }

}

var TYPES: any[] = [
	{"label": "All", "value": ""},
	{"label": "Professional", "value":"PR"},
	{ "label": "Brotherhood", "value": "BR" },
	{ "label": "Philanthropy", "value": "PH" },
]
