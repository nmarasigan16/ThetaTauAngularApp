import { RouterConfig } from '@angular/router';
import { EventListComponent } from './event-list';
import { EventDetailComponent } from './event-detail';

export const EventRoutes: RouterConfig = [
	{ path: 'events', component: EventListComponent },
	{ path: 'events/:id', component: EventDetailComponent }
]