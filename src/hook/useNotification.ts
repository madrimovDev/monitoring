import { useAppDispatch, useAppSelector } from '@hook/index'
import { admins, closeDrawer } from '@store'
import { useEffect } from 'react'
import { notification } from '@utils'

const useNotification = () => {
	const { status, message, errorMessage, error } = useAppSelector(admins)
	const dispatch = useAppDispatch()
	useEffect(() => {
		if (error && status === 'REJECTED') {
			return notification('error', errorMessage?.status, errorMessage?.message)
		}
		if (!error && status === 'FULFILLED') {
			notification('success', message)
			setTimeout(() => {
				dispatch(closeDrawer())
			}, 500)
			return
		}
	}, [error, status])
}

export default useNotification