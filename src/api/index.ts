import axios from 'axios'

const api = axios

api.defaults.baseURL = import.meta.env.VITE_BASE_URL
console.log(import.meta.env)

interface AxiosResponseType {
	username: string
	permissoon: []
	token: string
}

api.interceptors.request.use(( config ) => {
	if (!config?.headers) {
		throw new Error(`Expected 'config' and 'config.headers' not to be undefined`)
	}
	config.headers.Authorization = localStorage.getItem('accessToken')
	return config
}, ( err ) => {
	console.log(err)
})

export default api