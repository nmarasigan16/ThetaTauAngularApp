import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'event-component',
	template: `
	<router-outlet></router-outlet>
	`,
	directives: [ ROUTER_DIRECTIVES ]
})
export class EventComponent{

};
