type DirectionName = 'frontend' | 'nodejs' | 'web kids' | 'pyhton' | 'android'

export interface IDirection {
	name: DirectionName
	students: number
	teachers: number
	groups: number
	slug: string
}

export interface IDashboard {
	students: number
	teachers: number
	groups: number
	admins: number
	directions: IDirection[]
}

/**
 Dashboard

	 	students: 641
	 	teachers: 20
	 	groups: 102

 		Directions
 			- Node.js
 				students: 105
 				groups: 11
 				teachers: 1

 			- Frontend
 				students: 124
 				groups: 12
 				teachers: 4

  			- Web Kids
 				students: 70
 				groups: 5
 				teachers: 2
 */