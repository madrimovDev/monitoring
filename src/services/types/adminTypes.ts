export interface Admin {
	id: number
	userId: number
	role: string
	username: string
	name: string
	permissions: string[]
}

export interface AdminResponse {
	message: string
	admin: Admin
}

export interface AdminsResponse {
	message: string
	admins: Admin[]
}
