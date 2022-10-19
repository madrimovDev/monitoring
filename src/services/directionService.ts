import api from '@api'
import { DirectionResponse, DirectionsResponse, NewDirection } from '@services/types/directionsTypes'

class DirectionService {
	private static base = '/directions'

	static async getAll() {
		return await api.get<DirectionsResponse>(this.base)
	}

	static async create( direction: NewDirection ) {
		return await api.post<DirectionResponse>(this.base, direction)
	}

	static async update( id: number, direction: NewDirection ) {
		return await api.put<DirectionResponse>(`${this.base}/${id}`, direction)
	}

	static async del( id: number ) {
		return await api.delete<DirectionResponse>(`${this.base}/${id}`)
	}
}

export default DirectionService