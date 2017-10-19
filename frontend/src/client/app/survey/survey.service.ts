import { Injectable } from '@angular/core';
import { Question } from './interfaces/survey';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SurveyService {

	public getQuestions(): any {
		let questions: Question[][] = [
			[
				{
					text: 'Cik bieži Tu tīri savus zobus divas reizes dienā?',
					options: [
						{
							text: 'Katru dienu',
							value: 1
						},
						{
							text: '3-5 reizes nedēļā',
							value: 2
						},
						{
							text: '1-2 reizes nedēļā',
							value: 3
						},
						{
							text: 'Reizēm',
							value: 4
						},
						{
							text: 'Nekad',
							value: 5
						}
					]
				},
				{
					text: 'Cik ilgi Tu jau tīri zobus pēc norādīta biežuma?',
					options: [
						{
							text: 'Mazāk par 6 mēnešiem',
							value: 1
						},
						{
							text: 'No 6 mēnešiem līdz 1 gadam',
							value: 2
						},
						{
							text: 'Vairāk par vienu gadu',
							value: 3
						}
					]
				}
			],
			[
				{
					text: '2 Dala - Cik bieži Tu tīri savus zobus divas reizes dienā?',
					options: [
						{
							text: 'Katru dienu',
							value: 1
						},
						{
							text: '3-5 reizes nedēļā',
							value: 2
						},
						{
							text: '1-2 reizes nedēļā',
							value: 3
						},
						{
							text: 'Reizēm',
							value: 4
						},
						{
							text: 'Nekad',
							value: 5
						}
					]
				},
				{
					text: '2 Dala - Cik ilgi Tu jau tīri zobus pēc norādīta biežuma?',
					options: [
						{
							text: 'Mazāk par 6 mēnešiem',
							value: 1
						},
						{
							text: 'No 6 mēnešiem līdz 1 gadam',
							value: 2
						},
						{
							text: 'Vairāk par vienu gadu',
							value: 3
						}
					]
				}
			]
		];
		return questions;
	}

}
