import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'app-event-create',
  templateUrl: 'event-create.component.html',
  styleUrls: ['event-create.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES],
})
export class EventCreateComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
