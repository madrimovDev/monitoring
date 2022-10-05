import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Admins, Dashboard, Login, PageNotFound } from './pages'
import { Layout } from './ui'
import RequireAuth from './pages/RequireAuth'
import { useAppSelector } from './hook'

const App = () => {
	const { status } = useAppSelector(state => state.auth)
	const navigate = useNavigate()

	useEffect(() => {
		if (status === 'FULFILLED') {
			navigate('/')
		}
	}, [])

	return (
		<Routes>
			<Route path={'login'} element={<Login />} />
			<Route element={<RequireAuth />}>
				<Route element={<Layout />}>
					<Route path={'/'} element={<Dashboard />} />
					<Route path={'/admins'} element={<Admins />} />
					<Route path={'*'} element={<PageNotFound />} />
				</Route>
			</Route>
			<Route path={'*'} element={<PageNotFound />} />
		</Routes>
	)
}

export default App