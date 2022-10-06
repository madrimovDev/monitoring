import React from 'react'
import { Col, Layout as AntLayout, Row } from 'antd'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

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
						<Outlet />
					</Col>
				</Row>
			</Content>
		</AntLayout>
	)
}

export default Layout