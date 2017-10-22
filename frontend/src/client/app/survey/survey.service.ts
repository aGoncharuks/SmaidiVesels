import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UrlService } from '../shared/url.service';
import { Http } from '@angular/http';

@Injectable()
export class SurveyService {

	constructor(
		private http: Http,
		private urlService: UrlService
	) {}


	public getQuestions(): Observable<any> {
		return this.http.get(this.urlService.getQuestionsUrl)
			.map((response: any) => JSON.parse(response._body));
	}

	public saveAnswers(answers: any): Observable<any> {
		return this.http.post(this.urlService.getSaveAnswersUrl, answers);
	}

}
