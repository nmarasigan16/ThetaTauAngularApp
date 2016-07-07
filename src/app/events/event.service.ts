import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UrlService } from '../services/url.service';
import { Event } from '../properties/props';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class EventService {

  constructor(private urls: UrlService, private http: Http) {}

  private BaseUrl = this.urls.getAPIUrl();
  private events_url = '/events/';
  private details_url = 'detail/';
  private add_url = '/hours/update/';

	getEvents(): Observable<Event[]>{
		let headers = new Headers();
		this.urls.appendHeaders(headers);
		return this.http.get(this.BaseUrl + this.events_url, {headers: headers})
		           .map(this.extractData)
	               .catch(this.handleError);
	}
	getEvent(id): Observable<Event>{
		let headers = new Headers();
		this.urls.appendHeaders(headers);
		return this.http.get(
			this.BaseUrl + this.events_url + this.details_url + id + '/',{headers: headers})
			.map(this.extractData)
			.catch(this.handleError);
	}

	addEvent(id, hours){
		let headers = new Headers();
		this.urls.appendHeaders(headers);
		return this.http.get(
			this.BaseUrl + this.add_url + id.toString() + '/' + hours.toString() + '/',{headers: headers}
			)
			.map(this.extractData)
			.catch(this.handleError);
	}

	createEvent(name:string, date:string, location:string, duration:number, about:string, etype:string){
		let headers = new Headers();
		this.urls.appendHeaders(headers);
		headers.append('Content-Type', 'application/json');
		this.http.post(
			this.BaseUrl + this.events_url + 'create/',
			JSON.stringify({name, date, location, duration, about, etype}),
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
