import api from '@api'
import { DashboardResponseType } from './types/dashboardTypes'

class DashboardService{
	static async get(){
		const response = await api.get<DashboardResponseType>('/dashboard')
		return response
	}
}
export default DashboardService