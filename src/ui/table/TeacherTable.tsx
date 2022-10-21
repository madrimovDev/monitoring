import React from 'react'
import { Badge, Button, Space, Table, Typography } from 'antd'
import { useAppDispatch, useAppSelector } from '@hook'
import { openDrawer, teachers } from '@store'
import { getFullDate } from '@utils'
import { DeleteFilled, EditFilled } from '@ant-design/icons'
import { getAllDirections } from '@store/actions/directionsActions'
import { deleteTeacher } from '@store/actions'

const { Column, ColumnGroup } = Table
const { Text } = Typography


const TeacherTable = () => {
	const { status, data } = useAppSelector(teachers)
	const dispatch = useAppDispatch()

	const onEdit = ( d: any ) => {
		dispatch(openDrawer({
			type: 'teacher',
			entity: 'update',
			data: d
		}))
		dispatch(getAllDirections())
	}

	const onDelete = ( id: number ) => {
		dispatch(deleteTeacher(id))
	}

	return (
		<Table size={'middle'} showHeader title={() => 'Teachers'} loading={status === 'PENDING'} dataSource={data || []}
					 rowKey={'id'}>
			<ColumnGroup title={'Full Name'}>
				<Column title={'Name'} dataIndex={'name'} key={'name'} />
				<Column title={'Surname'} dataIndex={'surname'} key={'surname'} />
			</ColumnGroup>
			<Column title={'Birthday'} dataIndex={'birthday'} key={'birthday'} render={( value ) => {
				return (
					<>{getFullDate(value)}</>
				)
			}} />
			<Column title={'Phone'} dataIndex={'phone'} key={'phone'} />
			<Column title={'Groups'} dataIndex={'groups'} key={'groups'}
							render={( value: { id: number, name: string }[] ) => {
								if (!value.length) {
									return (
										<Badge status={'warning'} text={'Empty'} />
									)
								}
								return (
									value.map(group => {
										return (
											<Text key={group.id} style={{ marginRight: 5 }}>{group.name}</Text>
										)
									})
								)
							}} />
			<Column title={'Directions'} dataIndex={'directions'} key={'directions'}
							render={( value: { id: number, name: string }[] ) => {
								return (
									value.map(directions => {
										return (
											<Text key={directions.id} style={{ marginRight: 5 }}>{directions.name}</Text>
										)
									})
								)
							}} />
			<Column title={'Action'} key={'action'} render={( value ) => {
				return (
					<Space>
						<Button onClick={() => onEdit(value)} size={'small'} type={'primary'} icon={<EditFilled />}>Edit</Button>
						<Button onClick={() => onDelete(value.id)} size={'small'} danger icon={<DeleteFilled />}>Delete</Button>
					</Space>
				)
			}} />
		</Table>
	)
}

export default TeacherTable
