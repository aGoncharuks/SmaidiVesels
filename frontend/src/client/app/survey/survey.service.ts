import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UrlService } from '../shared/url.service';
import { Http } from '@angular/http';
import { Student } from './interfaces/survey';

@Injectable()
export class SurveyService {

	constructor(
		private http: Http,
		private urlService: UrlService
	) {}


	/**
	 * Get all survey questions
	 * @returns {Observable<R>}
	 */
	public getQuestions(): Observable<any> {
		return this.http.get(this.urlService.getQuestionsUrl)
			.map((response: any) => JSON.parse(response._body));
	}

	/**
	 * Save survey results
	 * @param answers
	 * @returns {Observable<Response>}
	 */
	public saveAnswers(student: Student, answers: any): Observable<any> {
		return this.http.post(this.urlService.getSaveAnswersUrl, {student: student, answers: answers});
	}

	/**
	 * Get study content id based on survey results
	 * @param answers
	 * @returns {number}
	 */
	public getStudyContentId(answers: any): number {

		if(answers[0] >= 3  && answers[2] >= 2 && answers[3] >= 2) {
			return 1;
		} else if (answers[0] >= 3  && answers[3] === 1) {
			return 2;
		} else if (answers[0] >= 3 &&  answers[2] === 1) {
			return 3;
		} else if (answers[0] <= 2 &&  answers[1] === 1) {
			return 4;
		} else if (answers[0] <= 2 &&  answers[1] >= 2) {
			return 5;
		}
		/**
		 * If no match => return first content id
		 */
		return 1;
	}

}
