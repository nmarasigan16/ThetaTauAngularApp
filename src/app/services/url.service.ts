import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class UrlService{
	constructor(private cookie: CookieService, private http: Http){

	}
	getAPIUrl(){
		return 'http://127.0.0.1:4000';
	}
	appendHeaders(headers: Headers){
		let auth_cookie = this.cookie.get('Token');
		if(auth_cookie){
			headers.append('Authorization', 'Token ' + auth_cookie);
		}
		return headers;
	}

}