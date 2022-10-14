import React from 'react'
import { Button, Space, Table, Tag } from 'antd'
import { DeleteFilled, EditFilled } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '@hook'
import { admins, getPermissions, openDrawer } from '@store'
import { nanoid } from 'nanoid'
import { deleteAdmin } from '@store/actions/adminsActions'

const { Column } = Table

interface DataType {
	id: React.Key
	name: string
	username: string
	password: string
	permissions: string[]
}

const AdminTable = () => {
	const dispatch = useAppDispatch()
	const { status, data } = useAppSelector(admins)

	const onEdit = ( record: DataType ) => {
		dispatch(openDrawer({
			type: 'admin',
			entity: 'update',
			data: record
		}))
		dispatch(getPermissions())
	}

	const onDelete = ( id: number ) => {
		dispatch(deleteAdmin(id))
	}

	return (
		<Table size={'middle'} showHeader title={() => 'Admins'} loading={status === 'PENDING'} dataSource={data || []}
					 rowKey={'id'}>
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
			<Column title={'Action'} key={'action'} render={( value ) => (
				<Space>
					<Button onClick={() => onEdit(value)} size={'small'} type={'primary'}
									icon={<EditFilled />}>Edit</Button>
					<Button onClick={() => onDelete(value.id)} size={'small'} danger icon={<DeleteFilled />}>Delete</Button>
				</Space>
			)} />
		</Table>
	)
}

export default AdminTable