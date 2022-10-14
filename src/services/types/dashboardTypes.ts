type DirectionName = 'frontend' | 'nodejs' | 'web kids' | 'pyhton' | 'android'

export interface DirectionType {
	name: DirectionName
	students: number
	teachers: number
	groups: number
}

export interface DashboardResponseType {
	students: number
	teachers: number
	groups: number
	admins: number
	directions: DirectionType[]
}
