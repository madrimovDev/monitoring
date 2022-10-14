import { ResponseErrorMapperType } from '@mapper/responseErrorMapper'

export type Status = 'PENDING' | 'FULFILLED' | 'REJECTED' | 'DEFAULT'

export interface InitialState<T> {
	status: Status
	data: T
	message: string
	error: boolean
	errorMessage: ResponseErrorMapperType | null
}