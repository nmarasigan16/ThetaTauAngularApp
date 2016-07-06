import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { OVERLAY_PROVIDERS } from '@angular2-material/core/overlay/overlay';
import { Event } from '../../properties/event';
import { EventService } from '../event.service';
import { FullPipe } from '../pipes/full.pipe';

@Component({
	moduleId: module.id,
	selector: 'event-detail',
	templateUrl: 'event-detail.html',
	styleUrls: ['event-detail.css'],
	directives: [ MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES ],
	providers: [ MATERIAL_PROVIDERS, OVERLAY_PROVIDERS],
	pipes: [ FullPipe ]
})
export class EventDetailComponent{

	form: any;
	route_sub: any;
	event_sub: any;
	event: Event;

	constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private service: EventService) {
	}

	ngOnInit() {
		/** implement service to get specific event**/
		this.form = this.fb.group({
			hours: ['', Validators.pattern('[0-9]+')],
		});

		this.route_sub = this.route.params.subscribe(
			params => {
				let id = params['id'];
				this.getEvent(id)
			},
			error => console.error(error));
	}

	getEvent(id:string){
		this.event_sub = this.service.getEvent(id).subscribe(
			event => {
				this.event = event;
			});
	}

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