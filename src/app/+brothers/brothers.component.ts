import { Component, OnInit } from '@angular/core';
import { BrotherListComponent } from './brother-list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MATERIAL_DIRECTIVES } from 'ng2-material';

@Component({
	moduleId: module.id,
	selector: 'app-brothers',
	templateUrl: 'brothers.component.html',
	styleUrls: ['brothers.component.css'],
	directives: [MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MATERIAL_DIRECTIVES, BrotherListComponent]
})
export class BrothersComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}
}
