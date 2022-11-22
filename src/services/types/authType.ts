export interface AuthResponseType {
	username: string
	permissions: string[]
	token: string
	role: string
}

export interface LoginUserType {
	username: string
	password: string
}
