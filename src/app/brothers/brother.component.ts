import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { BrotherService } from './brother.service';

@Component({
	moduleId: module.id,
	selector: 'brother-component',
	template: `
	<router-outlet></router-outlet>
	`,
	directives: [ ROUTER_DIRECTIVES ],
	providers: [ BrotherService ]
})
export class BrotherComponent{

};
