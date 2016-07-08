import { Component, OnInit } from '@angular/core';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { OVERLAY_PROVIDERS } from '@angular2-material/core/overlay/overlay';

@Component({
  moduleId: module.id,
  selector: 'app-initiate',
  templateUrl: 'initiate.component.html',
  styleUrls: ['initiate.component.css'],
  directives: [MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES],
  providers: [MATERIAL_PROVIDERS, OVERLAY_PROVIDERS]	
})
export class InitiateComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  initiateClose(status:number){
	  console.log(status);
  }

}
