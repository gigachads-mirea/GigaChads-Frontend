export interface IServer {
	id: number;
	owner: string;
	ipAddress: string;
	capacity: number;
	currentOnline: number;
	region: string;
	ping: number;
	antiCheat: boolean;
	isModded: boolean;
	rating: number;
	game: string;
	validated: boolean;

}
