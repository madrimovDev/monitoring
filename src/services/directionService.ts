import api from '@api'
import { DirectionsResponse } from '@services/types/directionsTypes'

class DirectionService {
	private static base = '/directions'

	static async getAll() {
		return await api.get<DirectionsResponse>(this.base)
	}
}

export default DirectionService