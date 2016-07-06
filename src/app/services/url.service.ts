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
	getUser(){
		let url = this.getAPIUrl + 'rest-auth/user/';
		let headers = new Headers();
		this.appendHeaders(headers);
		return this.http.get(url, {headers: headers})
		           .map(this.extractData)
	               .catch(this.handleError);
	}
	getOfficer(){
		let url = this.getAPIUrl + 'officer/';
		let headers = new Headers();
		this.appendHeaders(headers);
		return this.http.get(url, {headers: headers})
		           .map(this.extractData)
	               .catch(this.handleError);
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