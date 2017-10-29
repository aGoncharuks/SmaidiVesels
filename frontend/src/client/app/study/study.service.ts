import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UrlService } from '../shared/url.service';
import { Http } from '@angular/http';

@Injectable()
export class StudyService {

	constructor(
		private http: Http,
		private urlService: UrlService
	) {}

	public getStudyContent(contentId: number): Observable<any> {
		return this.http.post(this.urlService.getStudyContentUrl, {contentId: contentId})
			.map((response: any) => response._body);
	}

}
