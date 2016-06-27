import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS, RequestOptions } from '@angular/http';
import { ExRequestOptions } from './app/request_options.service';
import { GlobalUrlService } from './app/url.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
	APP_ROUTER_PROVIDERS,
	disableDeprecatedForms(),
	provideForms(),
	HTTP_PROVIDERS,
	provide( RequestOptions, {useClass: ExRequestOptions}),
	GlobalUrlService
	])
	 .catch((err: any) => console.error(err));