import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Login, RequireAuth } from '@pages'
import { Layout } from '@ui'
import { useAppSelector } from '@hook'

const App = () => {
	const { status } = useAppSelector(state => state.auth)
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		if (status === 'FULFILLED') {
			navigate('/')
		}
	}, [])

	return (
		<Routes>
			<Route path={'login'} element={<Login />} />
			<Route element={<RequireAuth />}>
				<Route path={'*'} element={<Layout />} />
			</Route>
		</Routes>
	)
}

export default App