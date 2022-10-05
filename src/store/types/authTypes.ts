import { UserMappedType } from '@/mapper/authResponseMapper'

interface AuthInitialStateType {
	status: 'PENDING' | 'FULFILLED' | 'REJECTED' | 'DEFAULT',
	data: UserMappedType | null
	error?: string
}

export default AuthInitialStateType