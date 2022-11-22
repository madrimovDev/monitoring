import { UserAddOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Row, Space } from 'antd'
import React from 'react'

const Groups = () => {
	return (
		<>
			<Row style={{ marginTop: 60 }}>
				<Col
					span={18}
					offset={3}>
					<Space style={{ justifyContent: 'end', width: '100%' }}>
						<Button
							type={'primary'}
							icon={<UserAddOutlined />}>
							Create Group
						</Button>
					</Space>
					<Divider />
				</Col>
			</Row>
		</>
	)
}

export default Groups
