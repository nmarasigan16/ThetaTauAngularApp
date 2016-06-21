import { RouterConfig } from '@angular/router';
import { BrotherListComponent } from './brother-list';
import { BrotherDetailComponent } from './brother-detail';

export const BrotherRoutes: RouterConfig = [
	{ path: 'brothers', component: BrotherListComponent },
	{ path: 'brothers/:id', component: BrotherDetailComponent}
]