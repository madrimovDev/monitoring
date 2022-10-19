export interface Direction {
	id: number;
	name: string;
	status: string;
}

export interface NewDirection {
	name: string
}

export interface DirectionsResponse {
	message: string;
	directions: Direction[];
}

export interface DirectionResponse {
	message: string
	direction: Direction
}