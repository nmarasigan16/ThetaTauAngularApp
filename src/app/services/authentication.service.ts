import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class AuthService{
	constructor(private http: Http, private urls: UrlService, private cookie: CookieService){

	}
	private BaseUrl = this.urls.getAPIUrl();
	private auth_url = this.BaseUrl + '/rest-auth/';

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
			.map((res) =>{
				console.log(res);
				if (res.key){
					this.cookie.put('Token', res.key);
					return true;
				}
				return false;
			})
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