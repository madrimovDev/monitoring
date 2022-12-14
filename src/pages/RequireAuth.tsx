import React from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '@hook'
import { auth } from '@store'

const RequireAuth = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const { status, data } = useAppSelector(auth)

	return status === 'FULFILLED' ? <Outlet /> : <Navigate to={'/login'} replace state={{ from: location }} />
}

export default RequireAuth
