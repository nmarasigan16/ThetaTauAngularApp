import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Brother } from  '../../../properties/brother';

@Component({
  moduleId: module.id,
  selector: 'app-brother-detail',
  templateUrl: 'brother-detail.component.html',
  styleUrls: ['brother-detail.component.css'],
  directives: [MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})
export class BrotherDetailComponent implements OnInit {
	brother:Brother = {"id": 1, "name": "John", "email": "asdas@asdasd", "phone_number": "123456789", "city": "Champaign"}

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  }

  goBack(){
  	this.router.navigate(['/brothers']);
  }

}
