import { RouterConfig } from '@angular/router';
import { InterviewListComponent } from './interview-list';
import { InterviewDetailComponent } from './interview-detail';

export const InterviewRoutes: RouterConfig = [
	{ path: 'interviews', component: InterviewListComponent },
	{ path: 'interviews/:id', component: InterviewDetailComponent }
]