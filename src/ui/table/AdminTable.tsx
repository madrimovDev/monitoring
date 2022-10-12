import React from 'react'
import { Button, Space, Table, Tag } from 'antd'
import { DeleteFilled, EditFilled } from '@ant-design/icons'
import { useAppDispatch } from '@hook'
import { getPermissions, openDrawer } from '@store'
import { nanoid } from 'nanoid'

const { Column } = Table

interface DataType {
	id: React.Key
	name: string
	username: string
	password: string
	permissions: string[]
}

const data: DataType = {
	name: 'Admin',
	id: nanoid(),
	username: 'username',
	password: 'password',
	permissions: ['groups', 'teachers', 'students', 'directions']
}

const datas: DataType[] = new Array(5).fill(data).map(( item, index ) => ({
	...item,
	id: item.id + nanoid(),
	name: item.name + ' ' + (index + 1)
}))

const AdminTable = () => {
	const dispatch = useAppDispatch()

	const onEdit = ( record: DataType ) => {
		dispatch(openDrawer({
			type: 'admin',
			entity: 'update',
			data: record
		}))
		dispatch(getPermissions())
	}

	return (
		<Table size={'middle'} showHeader title={() => 'Admins'} dataSource={datas} rowKey={'id'}>
			<Column title={'Name'} dataIndex={'name'} key={'name'} />
			<Column title={'Permission'} dataIndex={'permissions'} key={'permissions'} render={( value: string[] ) => {
				return (
					<>
						{
							value.map(item => (
								<Tag key={item} color={'blue'}>{item}</Tag>
							))
						}
					</>
				)
			}} />
			<Column title={'Action'} key={'action'} render={( value, record, index ) => (
				<Space>
					<Button onClick={() => onEdit(value)} size={'small'} type={'primary'}
									icon={<EditFilled />}>Edit</Button>
					<Button size={'small'} danger icon={<DeleteFilled />}>Delete</Button>
				</Space>
			)} />
		</Table>
	)
}

export default AdminTable