import { Component, OnInit} from '@angular/core';
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
export class BrotherDetailComponent implements OnInit{

	constructor( private route: ActivatedRoute, private router: Router, private service: BrotherService){
	}
	sub:any;
	id:number;
	brother;

	ngOnInit(){
		this.sub = this.route.params.subscribe(
			params => {
				let id = params['id'];
				this.getBrother(id)
			},
			error => console.error(error),
			() => console.log("subscribed to route params"));
	}

	getBrother(id){
		this.service.getBrother(id).subscribe(
			brother => {
				this.brother = brother
				console.log("assigned brother");
			});
	}




	goBack(){
		let link = ['/brothers'];
		this.router.navigate(link); 
	}

}
