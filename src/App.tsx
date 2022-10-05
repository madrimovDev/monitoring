import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, PageNotFound } from './pages'

const App = () => {
	return (
		<Routes>
			<Route path={'login'} element={<Login />} />
			<Route path={'*'} element={<PageNotFound />} />
		</Routes>
	)
}

export default App