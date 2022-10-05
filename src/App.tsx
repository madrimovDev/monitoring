import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard, Login, PageNotFound } from './pages'
import { Layout } from './ui'

const App = () => {
	return (
		<Routes>
			<Route path={'login'} element={<Login />} />
			<Route element={<Layout />}>
				<Route path={'/'} element={<Dashboard />} />
				<Route path={'*'} element={<PageNotFound />} />
			</Route>
			<Route path={'*'} element={<PageNotFound />} />
		</Routes>
	)
}

export default App