import { ROUTER_DIRECTIVES, provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login';
import { BrotherRoutes } from './list_components/brothers/brother.routes';

export const routes: RouterConfig = [
	{ path: '/login', component: LoginComponent, index: true },
	...BrotherRoutes,

];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];