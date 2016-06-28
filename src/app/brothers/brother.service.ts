import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { GlobalUrlService } from '../url.service';
import { Brother } from '../properties/props';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class BrotherService {

  constructor(private urls: GlobalUrlService, private http: Http) {}

  private BaseUrl = this.urls.getAPIUrl();
  private brothers_url = '/users/';
  private details_url = 'detail/';

	getBrothers(): Observable<Brother[]>{
		return this.http.get(this.BaseUrl + this.brothers_url)
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
