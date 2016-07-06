import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UrlService } from './url.service';

@Injectable()
export class UserService{
	private loggedIn = false;
	constructor(private url: UrlService, private cookie: CookieService, private http: Http){
		this.loggedIn = !!this.cookie.get('Token')
	}

	getUser(){
		let url = this.url.getAPIUrl() + '/user/status/';
		let headers = new Headers();
		this.url.appendHeaders(headers);
		return this.http.get(url, {headers: headers})
		           .map(this.extractData)
	               .catch(this.handleError);
	}
	getOfficer(){
		let url = this.url.getAPIUrl() + '/officer/';
		let headers = new Headers();
		this.url.appendHeaders(headers);
		return this.http.get(url, {headers: headers})
	               .catch(this.handleError);
	}

	isLoggedIn(){
		return this.loggedIn;
	}

	login(){
		this.loggedIn = true;
	}

	//logout is placed in here so that more services don't need to be injected into the main appcomponent
	logout(){
		this.cookie.remove('Token');
		this.loggedIn = false;
	}
	private handleError (error: any) {
	  // In a real world app, we might use a remote logging infrastructure
	  // We'd also dig deeper into the error to get a better message
	  let errMsg = (error.message) ? error.message :
	    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	  console.error(errMsg); // log to console instead
	  return Observable.throw(errMsg);
	}
	private extractData(res: Response){
		let body = res.json()
		return body || {};
	}
}