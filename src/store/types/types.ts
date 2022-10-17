export type Status = 'PENDING' | 'FULFILLED' | 'REJECTED' | 'DEFAULT'

export interface InitialState<T> {
	status: Status
	data: T
	response: {
		error: boolean
		errorMessage: string
	}
}