import React, { useEffect } from 'react'
import { Col, Layout as AntLayout, Row } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import { useAppSelector } from '@hook'
import { auth } from '@store'

const { Content } = AntLayout

const Layout = () => {
	const navigate = useNavigate()
	const {data} = useAppSelector(auth)

	return (
		<AntLayout style={{ height: '100vh', overflow: 'hidden' }}>
			<Sidebar />
			<Content style={{ overflow: 'auto' }}>
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