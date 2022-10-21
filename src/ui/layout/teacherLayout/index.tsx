import React from 'react'
import { Col, Layout, Row } from 'antd'
import Header from '@ui/layout/adminLayout/header/Header'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

const TeacherLayout = () => {
	return (
		<Layout style={{ height: '100vh', overflow: 'hidden' }}>
			<Content style={{ overflow: 'auto' }}>
				<Header />
				<Row>
					<Col span={22} offset={1}>
						<Outlet />
					</Col>
				</Row>
			</Content>
		</Layout>
	)
}

export default TeacherLayout
