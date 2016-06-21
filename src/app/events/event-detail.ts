import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { OVERLAY_PROVIDERS } from '@angular2-material/core/overlay/overlay';
import { Event } from '../properties/event';

@Component({
	selector: 'event-detail',
	templateUrl: './app/templates/event-detail.html',
	styleUrls: ['./app/styles/event-detail.css'],
	directives: [ MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES ],
	providers: [ MATERIAL_PROVIDERS, OVERLAY_PROVIDERS]	
})
export class EventDetailComponent{

	form: any;

	constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
	}

	ngOnInit() {
		/** implement service to get specific event**/
		this.form = this.fb.group({
			hours: ['', Validators.pattern('[0-9]+')],
		});
	}

	event: Event = { "id": 1, "name": "Happy Hour", "date": new Date(2016, 8, 16, 18, 0), "location": "Regends", "about": "This is a get together between a couple of friendly brothers", "type": "BR" }

	goBack() {
		let link = ['/events'];
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