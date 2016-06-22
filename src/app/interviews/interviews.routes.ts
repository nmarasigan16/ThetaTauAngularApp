import { RouterConfig } from '@angular/router';
import { InterviewListComponent } from './interview-list/interview-list';
import { InterviewDetailComponent } from './interview-detail/interview-detail';
import { InterviewChecklistComponent } from './interview-checklist/interview-checklist';

export const InterviewRoutes: RouterConfig = [
	{ path: 'interviews', component: InterviewListComponent },
	{ path: 'interviews/:id', component: InterviewDetailComponent },
	{ path: 'check/interviews', component: InterviewChecklistComponent }
]