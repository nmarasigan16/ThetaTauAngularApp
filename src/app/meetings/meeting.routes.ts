import { RouterConfig } from '@angular/router';
import { MeetingComponent } from './meetings.component';
import { MeetingDetailComponent } from './meeting-detail/index';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { MeetingCreateComponent } from './meeting-create/index';



export const MeetingRoutes: RouterConfig = [
	{
		path: 'meetings', 
		component: MeetingComponent,
		children: [
			{ path: '', component: MeetingListComponent, terminal: true },
			{ path: 'create', component: MeetingCreateComponent},
			{ path: 'detail/:id', component: MeetingDetailComponent}
		]
	}
	
]