import { Component, OnInit } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { EventListComponent } from './events-list';

@Component({
  moduleId: module.id,
  selector: 'app-events',
  templateUrl: 'events.component.html',
  styleUrls: ['events.component.css'],
  directives: [MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MATERIAL_DIRECTIVES, EventListComponent],
})
export class EventsComponent implements OnInit {
	selectedType: string;
	term: string;
	types = TYPES;
  constructor() {}

  ngOnInit() {
	  this.selectedType = "";
	  this.term = "";
  }

  onSelect(value:string){
	  this.selectedType = value;
  }
  onType(value:string){
	  console.log(value);
	  this.term = value;
  }
}

var TYPES: any[] = [
	{"label": "All", "value": ""},
	{"label": "Professional", "value":"PR"},
	{ "label": "Brotherhood", "value": "BR" },
	{ "label": "Philanthropy", "value": "PH" },
]
