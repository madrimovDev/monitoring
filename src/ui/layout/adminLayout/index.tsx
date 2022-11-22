import React from 'react'
import { Col, Layout, Row } from 'antd'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const { Content } = Layout

const AdminLayout = () => {
	return (
		<Layout style={{ height: '100vh', overflow: 'hidden' }}>
			<Sidebar />
			<Content style={{ overflow: 'auto' }}>
				<Header />
				<Row>
					<Col
						span={22}
						offset={1}>
						<Outlet />
					</Col>
				</Row>
			</Content>
		</Layout>
	)
}

export default AdminLayout
