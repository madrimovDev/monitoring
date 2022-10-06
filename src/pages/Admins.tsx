import React from 'react'
import { AdminCollapse, AnimatedPage } from '@ui'
import { Button, Col, Divider, Row, Space } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'

const Admins = () => {
	return (
		<AnimatedPage>
			<Row style={{ marginTop: 60 }}>
				<Col span={16} offset={4}>
					<Space style={{ justifyContent: 'end', width: '100%' }}>
						<Button type={'primary'} icon={<UserAddOutlined />}>Create Admin</Button>
					</Space>
					<Divider />
					<AdminCollapse />
				</Col>
			</Row>
		</AnimatedPage>
	)
}

export default Admins