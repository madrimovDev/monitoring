export type Status = 'PENDNIG' | 'FULFILLED' | 'REJECTED' | 'DEFAULT'

export interface InitialState<T> {
	status: Status
	data: T | null
}