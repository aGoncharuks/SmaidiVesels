import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {
	public apiUrl: string = 'http://smaidivesels.lv';
	public apiPort: string = ':8888';
	public getQuestionsUrl: string = this.apiUrl + this.apiPort + '/get/questions';
	public getSaveAnswersUrl: string =  this.apiUrl + this.apiPort + '/save/answers';
	public getStudyContentUrl: string =  this.apiUrl + this.apiPort + '/get/study/content';
	public getSchoolsUrl: string =  this.apiUrl + this.apiPort + '/get/schools';
}
