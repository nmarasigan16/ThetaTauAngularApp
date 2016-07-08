import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UrlService } from '../services/url.service';
import { Event } from '../properties/props';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class MeetingService {

  constructor(private urls: UrlService, private http: Http) {}

  private BaseUrl = this.urls.getAPIUrl();
  private extension = '/meetings/';
  private getter = 'full/';
  private creater = 'create/';

  getMeetings(){
  	let headers = new Headers();
	this.urls.appendHeaders(headers);
	return this.http.get(this.BaseUrl + this.extension + this.getter, {headers: headers})
	           .map(this.extractData)
               .catch(this.handleError);
  }

  getMeeting(id){
  	let headers = new Headers();
	this.urls.appendHeaders(headers);
	return this.http.get(this.BaseUrl + this.extension + this.getter + id + '/', {headers: headers})
	           .map(this.extractData)
               .catch(this.handleError);
  }

  createMeeting(date:string, mtype:string, password:string){
  	let headers = new Headers();
	this.urls.appendHeaders(headers);
	headers.append('Content-Type', 'application/json');
	this.http.post(
		this.BaseUrl + this.extension + 'create/',
		JSON.stringify({password, mtype, date}),
		{headers: headers})
		.toPromise()
		.then(this.extractData)
		.catch(this.handleError);
  }

  approveExcuse(id:number, status:number){
  	let headers = new Headers();
  	this.urls.appendHeaders(headers);
  	let url = this.BaseUrl + '/excuse/approve/' + id + '/' + status + '/';
  	this.http.get(url, {headers: headers})
  			.toPromise()
  			.then(this.extractData)
  			.catch(this.handleError);
  }

  takeAttendance(id){
  	let headers = new Headers();
  	this.urls.appendHeaders(headers);
  	let url = this.BaseUrl + '/attendance/' + id + '/';
  	this.http.get(url, {headers: headers})
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
