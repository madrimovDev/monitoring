import { AxiosError } from 'axios'

const responseErrorMapper = ( error: AxiosError<{ message: string }> ) => {
	return {
		status: error.response?.status,
		message: error.response?.data.message || 'Something error'
	}
}

export type ResponseErrorMapperType  =ReturnType<typeof responseErrorMapper>

export default responseErrorMapper