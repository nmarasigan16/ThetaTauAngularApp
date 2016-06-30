import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Brother } from '../../properties/brother';
import { BrotherService } from '../brother.service'

@Component({
	moduleId: module.id,
	selector: 'brother-detail',
	templateUrl: 'brother-detail.html',
	styleUrls: ['brother-detail.css'],
	directives: [ MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES ]	
})
export class BrotherDetailComponent{

	constructor(private router: Router, private service: BrotherService, private route: ActivatedRoute){

	}
	sub: any;
	brother: Brother;

	ngOnInit(){
		this.sub
	}


	goBack(){
		let link = ['/brothers'];
		this.router.navigate(link); 
	}

}
