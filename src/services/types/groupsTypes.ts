export interface Group {
	id: number;
	name: string;
	months: number;
	direction: string;
	students: number;
}

export interface GroupsResponse {
	message: string;
	groups: Group[];
}

export interface GroupResponse {
	message: string;
	group: Group;
}
