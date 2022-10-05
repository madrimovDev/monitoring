import React from 'react'
import { Col, Divider, Row, Typography } from 'antd'
import { Form } from '../ui'

const { Title } = Typography

const Login = () => {
	return (
		<Row>
			<Col span={6} offset={9}>
				<div style={{ marginTop: '10vh' }}>
					<Title style={{fontWeight: 600}} level={4}>Data Monitoring</Title>
					<Divider />
					<Form />
				</div>
			</Col>
		</Row>
	)
}

export default Login