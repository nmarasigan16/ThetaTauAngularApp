import { RouterConfig } from '@angular/router';
import { InterviewListComponent } from './interview-list';
import { InterviewDetailComponent } from './interview-detail';
import { InterviewChecklistComponent } from './interview-checklist';

export const InterviewRoutes: RouterConfig = [
	{ path: 'interviews', component: InterviewListComponent },
	{ path: 'interviews/:id', component: InterviewDetailComponent },
	{ path: 'interviews/check', component: InterviewChecklistComponent }
]