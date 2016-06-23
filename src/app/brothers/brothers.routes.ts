import { RouterConfig } from '@angular/router';
import { BrotherComponent } from './brother.component';
import { BrotherListComponent } from './brother-list/index';
import { BrotherDetailComponent } from './brother-detail/index';

export const BrotherRoutes: RouterConfig = [
	{
		path: 'brothers',
		component: BrotherComponent,
		children: [
			{ path: '', component: BrotherListComponent, terminal: true },
			{ path: ':id', component: BrotherDetailComponent }
		]
	}
];
	