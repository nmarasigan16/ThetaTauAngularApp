import { RouterConfig } from '@angular/router';
import { InterviewComponent } from './interview.component';
import { InterviewListComponent } from './interview-list/interview-list';
import { InterviewDetailComponent } from './interview-detail/interview-detail';
import { InterviewChecklistComponent } from './interview-checklist/interview-checklist';

export const InterviewRoutes: RouterConfig = [
	{
		path: 'interviews', 
		component: InterviewComponent,
		children: [
			{ path: '', component: InterviewListComponent, terminal: true },
			{ path: 'detail/:id', component: InterviewDetailComponent },
			{ path: 'check', component: InterviewChecklistComponent }
		]
	}
	
]