import React from 'react'
import { useAppSelector } from '@hook'
import { auth } from '@store'
import { Navigate } from 'react-router-dom'

const Navigation = () => {
	const { data } = useAppSelector(auth)
	
	switch (data?.role) {
		case 'admin': {
			return <Navigate to={'admin'} />
		}
		case 'teacher': {
			return <Navigate to={'teacher'} />
		}
		default: {
			return <Navigate to={'/admin'} />
		}
	}
}

export default Navigation
