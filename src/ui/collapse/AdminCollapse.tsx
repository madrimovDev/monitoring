import React from 'react'
import { Button, Collapse, Space, Tag, Typography } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

interface IAdmin {
	id: number
	name: string
	permissons: string[]
}

const admin: IAdmin = {
	id: Date.now(),
	name: 'John Doe',
	permissons: ['students', 'groups', 'teachers', 'directions']
}

const admins: IAdmin[] = new Array(5).fill(admin).map(( item, index ) => ({
	...item,
	name: item.name + ' ' + (index + 1),
	id: item.id + index
}))

const colors: string[] = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime']

const AdminCollapse = () => {
	return (
		<Collapse expandIconPosition={'end'}>
			{
				admins.map(item => (
					<Collapse.Panel key={item.id} header={item.name}>
						<Space style={{ justifyContent: 'space-between', width: '100%' }}>
							<Space>
								<Typography.Text strong>
									Permissions:{' '}
								</Typography.Text>
								{
									item.permissons.map(( item, index ) => (
										<Tag color={colors[index]}>{item}</Tag>
									))
								}
							</Space>

							<Space>
								<Button type={'primary'} size={'small'} icon={<EditOutlined />}>Edit</Button>
								<Button type={'default'} size={'small'} danger icon={<DeleteOutlined />}>Delete</Button>
							</Space>
						</Space>
					</Collapse.Panel>
				))
			}
		</Collapse>
	)
}

export default AdminCollapse