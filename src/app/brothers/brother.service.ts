import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UrlService } from '../services/url.service';
import { Brother } from '../properties/props';
import { Observable } from 'rxjs/Observable'


/** TODO Implement this with authentication headers, or make a service that gives us the headers **/

@Injectable()
export class BrotherService {

  constructor(private urls: UrlService, private http: Http) {}

  private BaseUrl = this.urls.getAPIUrl();
  private brothers_url = '/users/';
  private details_url = 'detail/';

	getBrothers(): Observable<Brother[]>{
		let headers = new Headers();
		this.urls.appendHeaders(headers);
		return this.http.get(this.BaseUrl + this.brothers_url, {headers: headers})
		           .map(this.extractData)
	               .catch(this.handleError);
	}
	getBrother(id): Observable<Brother>{
		let headers = new Headers();
		this.urls.appendHeaders(headers);
		return this.http.get(
			this.BaseUrl + this.brothers_url + this.details_url + id + '/',{headers: headers})
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
