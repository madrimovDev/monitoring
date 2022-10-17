import React from 'react'
import { Button, Space, Table, Typography } from 'antd'
import { useAppDispatch, useAppSelector } from '@hook'
import { openDrawer, teachers } from '@store'
import { getFullDate } from '@utils'
import { DeleteFilled, EditFilled } from '@ant-design/icons'

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
								return (
									value.map(group => {
										return (
											<Text key={group.id}>{group.name}</Text>
										)
									})
								)
							}} />
			<Column title={'Directions'} dataIndex={'directions'} key={'directions'}
							render={( value: { id: number, name: string }[] ) => {
								return (
									value.map(directions => {
										return (
											<Text key={directions.id}>{directions.name}</Text>
										)
									})
								)
							}} />
			<Column title={'Action'} key={'action'} render={( value ) => {
				return (
					<Space>
						<Button onClick={() => onEdit(value)} size={'small'} type={'primary'} icon={<EditFilled />}>Edit</Button>
						<Button size={'small'} danger icon={<DeleteFilled />}>Delete</Button>
					</Space>
				)
			}} />
		</Table>
	)
}

export default TeacherTable