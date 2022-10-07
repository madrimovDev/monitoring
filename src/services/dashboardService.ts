import api from '@api'
import { IDashboard } from '@store/types/dashboardTypes'

class DashboardService{
	static async get(){
		const response = await api.get<IDashboard>('/dashboard')
		return response
	}
}
export default DashboardService