import { Injectable } from '@angular/core';

@Injectable()
export class GlobalUrlService{
	getBaseAPIUrl(){
		return 'http://127.0.0.1:4000';
	}
}