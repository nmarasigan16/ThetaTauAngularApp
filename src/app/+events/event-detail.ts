import {Component, Input} from '@angular/core';
import { Control, Validators, FORM_DIRECTIVES, FormBuilder } from '@angular/common';
import {RouteParams, Router} from '@angular/router-deprecated';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import {OVERLAY_PROVIDERS} from '@angular2-material/core/overlay/overlay';

import {Event} from './event.ts'

@Component({
	selector: 'event-detail',
	templateUrl: 'app/+events/event-detail.html',
	providers: [OVERLAY_PROVIDERS, MATERIAL_PROVIDERS],
	styles:[`
		md-card {
			min-width: 66%;
		}
		button {
			background-color: #8B0000 ;
			color: #FFFFFF;
		}
		.add{
			position:relative;
			right:10px;
			bottom:-5px;
		}
	`],
	directives: [MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES],

})

export class EventDetailComponent {
	form: any;

	constructor(private routeParams: RouteParams, private router: Router, private fb: FormBuilder) {
	}

	ngOnInit() {
		/** implement service to get specific event**/
		this.form = this.fb.group({
			hours: ['', Validators.pattern('[0-9]+')],
		});
	}

	event: Event = { "id": 1, "name": "Happy Hour", "date": new Date(2016, 8, 16, 18, 0), "location": "Regends", "about": "This is a get together between a couple of friendly brothers", "type": "BR" }

	goBack() {
		let link = ['Events'];
		this.router.navigate(link);
	}
	addClose(value:number){
		/**TODO call event adder in the api**/
		if(this.form.valid)
		{
			console.log(value);
		}
	}
}