import { ROUTER_DIRECTIVES, provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login';
import { AttendanceComponent } from './attendance';
import { BrotherRoutes } from './brothers/brothers.routes';
import { EventRoutes } from './events/event.routes';
import { InterviewRoutes } from './interviews/interviews.routes'; 
import { MeetingRoutes } from './meetings/meeting.routes';

export const routes: RouterConfig = [
	{ path: 'login', component: LoginComponent },
	{ path: 'attendance', component: AttendanceComponent},
	...BrotherRoutes,
	...EventRoutes,
	...InterviewRoutes,
	...MeetingRoutes,
	
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];