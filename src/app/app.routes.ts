import { ROUTER_DIRECTIVES, provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login';

export const routes: RouterConfig = [
	{ path: '/login', component: LoginComponent },
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];