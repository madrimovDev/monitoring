import React from 'react'
import { AdminDrawer, AdminTable } from '@ui'
import { Button, Col, Divider, Row, Space } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import { useAppDispatch } from '@hook'
import { getPermissions, openDrawer } from '@store'

const Admins = () => {
	const dispatch = useAppDispatch()

	const onOpen = () => {
		dispatch(openDrawer({
			type: 'admin',
			entity: 'create'
		}))
		dispatch(getPermissions())
	}

	return (
		<>
			<Row style={{ marginTop: 60 }}>
				<Col span={16} offset={4}>
					<Space style={{ justifyContent: 'end', width: '100%' }}>
						<Button type={'primary'} onClick={onOpen} icon={<UserAddOutlined />}>Create Admin</Button>
					</Space>
					<Divider />
					<AdminTable />
				</Col>
			</Row>
			<AdminDrawer />
		</>

	)
}

export default Admins