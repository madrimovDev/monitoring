import React from 'react'
import { Col, Layout as AntLayout, Row } from 'antd'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import { AnimatePresence } from 'framer-motion'
import { Admins, Dashboard, PageNotFound } from '@pages'

const { Content } = AntLayout

const Layout = () => {
	const location = useLocation()
	return (
		<AntLayout style={{ height: '100vh' }}>
			<Sidebar />
			<Content>
				<Header />
				<Row>
					<Col span={22} offset={1}>
						<AnimatePresence mode={'wait'}>
							<Routes location={location} key={location.pathname}>
								<Route index element={<Dashboard />} />
								<Route path={'/admins'} element={<Admins />} />
								<Route path={'*'} element={<PageNotFound />} />
							</Routes>
						</AnimatePresence>
					</Col>
				</Row>
			</Content>
		</AntLayout>
	)
}

export default Layout