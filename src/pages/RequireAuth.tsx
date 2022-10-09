import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '@hook'
import { auth } from '@store'

const RequireAuth = () => {
	const location = useLocation()
	const { status } = useAppSelector(auth)
	return status === 'FULFILLED' ? <Outlet /> : <Navigate to={'/login'} replace state={{ location: location }} />
}

export default RequireAuth