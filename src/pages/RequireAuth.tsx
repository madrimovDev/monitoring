import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../hook'

const RequireAuth = () => {
	const location = useLocation()
	const { status } = useAppSelector(state => state.auth)
	return status === 'FULFILLED' ? <Outlet /> : <Navigate to={'/login'} replace state={{ location: location }} />
}

export default RequireAuth