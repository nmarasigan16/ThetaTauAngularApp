import { ROUTER_DIRECTIVES, provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login';
import { BrotherRoutes } from './brothers/brothers.routes';
import { EventRoutes } from './events/event.routes';

export const routes: RouterConfig = [
	{ path: '/login', component: LoginComponent },
	...BrotherRoutes,
	...EventRoutes,
	
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];