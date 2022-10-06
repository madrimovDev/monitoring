import React from 'react'
import { AdminCollapse } from '@ui'
import { Col, Row } from 'antd'

const Admins = () => {
	return (
		<Row style={{ marginTop: 60 }}>
			<Col span={16} offset={4}>
				<AdminCollapse />
			</Col>
		</Row>
	)
}

export default Admins