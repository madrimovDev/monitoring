export interface Teacher {
	id: number;
	name: string;
	userId: number;
	surname: string;
	username: string;
	permissions: string[];
	role: string;
}

export interface NewTeacher {
	username: string;
	password: string;
	name: string;
	surname: string;
	birthday: string;
	phone: string;
	directions: number[];
}

interface TeachersResponse {
	message: string
}

export interface ITeachers extends TeachersResponse{
	teachers: Teacher[]
}

export interface ITeacher extends TeachersResponse{
	teacher: Teacher
}