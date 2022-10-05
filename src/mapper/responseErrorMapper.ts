import { AxiosError } from 'axios'

const responseErrorMapper = ( error: AxiosError<{ message: string }> ) => {
	return {
		status: error.status,
		message: error.response?.data.message || 'Something error'
	}
}

export default responseErrorMapper