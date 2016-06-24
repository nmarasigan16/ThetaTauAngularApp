import { Excuse } from './excuse';

export class Meeting{
	id: number;
	password: string;
	mtype: string;
	date: Date;
	chapter: string;
	attendees: string[];
	excuses: Excuse[];
}