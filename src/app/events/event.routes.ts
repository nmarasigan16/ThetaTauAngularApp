import { RouterConfig } from '@angular/router';
import { EventComponent } from './event.component';
import { EventListComponent } from './event-list/event-list';
import { EventDetailComponent } from './event-detail/event-detail';
import { EventCreateComponent } from './event-create/event-create.component';

export const EventRoutes: RouterConfig = [
	{
		path: 'events',
		component: EventComponent,
		children: [
			{ path: '', component: EventListComponent, terminal: true },
			{ path: 'detail/:id', component: EventDetailComponent },
			{ path: 'create', component: EventCreateComponent }
		]
	}

]