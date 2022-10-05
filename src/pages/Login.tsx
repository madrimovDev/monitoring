import React, { useEffect } from 'react'
import { Col, Divider, message, Row, Typography } from 'antd'
import { Form } from '@/ui'
import { useAppSelector } from '@/hook'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography

const Login = () => {
	const { status } = useAppSelector(state => state.auth)
	const navigate = useNavigate()

	useEffect(() => {
		if (status === 'FULFILLED') {
			message.success('Login Successful', 1)
			setTimeout(() => navigate('/'), 1)
			return
		}
		if (status === 'REJECTED') {
			message.error('Login Unsuccessful', 1)
		}
	}, [status])

	return (
		<Row>
			<Col span={6} offset={9}>
				<div style={{ marginTop: '10vh' }}>
					<Title style={{ fontWeight: 600 }} level={4}>Data Monitoring</Title>
					<Divider />
					<Form />
				</div>
			</Col>
		</Row>
	)
}

export default Login