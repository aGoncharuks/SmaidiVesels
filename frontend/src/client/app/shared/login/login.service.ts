import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UrlService } from '../url.service';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {

	constructor(
		private http: Http,
		private urlService: UrlService
	) {}


	public getSchools(): Observable<any> {
		return this.http.get(this.urlService.getSchoolsUrl)
			.map((response: any) => JSON.parse(response._body));
	}

}
