import { Injectable } from '@angular/core';
import { GlobalUrlService } from './url.service';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService{
	constructor(private http: Http, private urls: GlobalUrlService){

	}
	private BaseUrl = this.urls.getAPIUrl();
	private auth_url = '/rest-auth/';

	login(username:string, password: string){
		let headers = new Headers();
		let login_url = this.auth_url + 'login/';
		headers.append('Content-Type', 'application/json');

		return this.http.post(
			login_url,
			JSON.stringify({ username, password }),
			{ headers }
			)
			.map(res => res.json())
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
}