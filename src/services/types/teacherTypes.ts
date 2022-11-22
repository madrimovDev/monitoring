export interface Teacher {
	id: number
	name: string
	userId: number
	surname: string
	username: string
	permissions: string[]
	role: string
}

export interface NewTeacher {
	username: string
	password: string
	name: string
	surname: string
	birthday: string
	phone: string
	directions: number[]
}

export interface TeachersResponse {
	message: string
	teachers: Teacher[]
}

export interface TeacherResponse {
	message: string
	teacher: Teacher
}
