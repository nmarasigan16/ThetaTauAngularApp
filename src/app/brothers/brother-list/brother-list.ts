import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SearchPipe } from '../pipes/search-pipe';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { Brother } from '../../properties/brother'
import { BrotherService } from '../brother.service';

@Component({
	moduleId: module.id,
	selector:'brother-list',
	pipes:[ SearchPipe ],
	directives: [MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES ],
	templateUrl: 'brother-list.html',
	styleUrls: ['brother-list.css'],
})
export class BrotherListComponent implements OnInit{

	public brothers;
	public errorMessage;
	subscription: any;

	constructor(private router: Router, private service: BrotherService){}

	ngOnInit(){
		this.getBrothers();
	}

	getBrothers(){
		this.subscription = this.service.getBrothers().subscribe(
			brothers => this.brothers = brothers,
			error => this.errorMessage = <any>error,
			() => console.log('got brothers'));
	}

	gotoDetail(id:number){
		this.router.navigate(['/brothers', id]);
	}

	ngOnDestroy(){
		if(this.subscription){
			this.subscription.unsubscribe();
		}
	}

}