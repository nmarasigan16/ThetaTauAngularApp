import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UrlService } from '../services/url.service';
import { Observable } from 'rxjs/Observable';
import { Attendance } from '../properties/props';

@Injectable()
export class AttendanceService {

  constructor(private urls: UrlService, private http: Http) {}

  private BaseUrl = this.urls.getAPIUrl();
  private url = '/attendance/update/';

	getAttendance(){
		let headers = new Headers();
		this.urls.appendHeaders(headers);
		return this.http.get(this.BaseUrl + this.url, {headers: headers})
		           .map(this.extractData)
	               .catch(this.handleError);
	}
	
	updateAttendance(password:string, excuse:string){
		let headers = new Headers();
		this.urls.appendHeaders(headers);
		headers.append('Content-Type', 'application/json');
		this.http.put(
			this.BaseUrl + this.url,
			JSON.stringify({password, excuse}),
			{headers: headers})
			.toPromise()
			.then(this.extractData)
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
