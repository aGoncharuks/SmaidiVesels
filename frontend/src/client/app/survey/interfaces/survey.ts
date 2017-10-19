export interface Question {
	text: string;
	options: Answer[];
}

export interface Answer {
	text: string;
	value: number | string;
}