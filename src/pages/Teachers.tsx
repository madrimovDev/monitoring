import React, { useEffect } from 'react'
import { useAppDispatch } from '@hook'
import { getAllTeachers } from '@store/actions/teachersActions'
import { Drawer, TeacherTable } from '@ui'
import { Button, Col, Divider, Row, Space } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import { openDrawer } from '@store'
import { getAllDirections } from '@store/actions/directionsActions'

const Teachers = () => {
	const dispatch = useAppDispatch()

	const onOpen = () => {
		dispatch(openDrawer({
			type: 'teacher',
			entity: 'create'
		}))
		dispatch(getAllDirections())
	}

	useEffect(() => {
		dispatch(getAllTeachers())
	}, [])

	return (
		<>
			<Row style={{ marginTop: 60 }}>
				<Col span={18} offset={3}>
					<Space style={{ justifyContent: 'end', width: '100%' }}>
						<Button type={'primary'} onClick={onOpen} icon={<UserAddOutlined />}>Create Teacher</Button>
					</Space>
					<Divider />
					<TeacherTable />
				</Col>
			</Row>
			<Drawer />
		</>
	)
}

export default Teachers