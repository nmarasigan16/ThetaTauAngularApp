import { Component, OnInit } from '@angular/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-attendance',
  templateUrl: 'attendance.component.html',
  styleUrls: ['attendance.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MATERIAL_DIRECTIVES]
})
export class AttendanceComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
