import React from 'react'
import { Button, Col, Divider, Row, Space } from 'antd'
import { FolderAddOutlined } from '@ant-design/icons'

const Directions = () => {
	const onOpen = {}

	return (
		<Row style={{ marginTop: 60 }}>
			<Col span={18} offset={3}>
				<Space style={{ justifyContent: 'end', width: '100%' }}>
					<Button type={'primary'} icon={<FolderAddOutlined />}>Create Direction</Button>
				</Space>
				<Divider />
			</Col>
		</Row>
	)
}

export default Directions