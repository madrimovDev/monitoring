import React from 'react'
import { Button, Space, Table, Tag } from 'antd'
import { DeleteFilled, EditFilled } from '@ant-design/icons'

const { Column } = Table

interface DataType {
	key: React.Key;
	name: string
	permissions: string[];
}

const data: DataType = {
	name: 'Admin',
	key: Date.now(),
	permissions: ['groups', 'teachers', 'students', 'directions']
}

const datas: DataType[] = new Array(5).fill(data).map(( item, index ) => ({
	...item,
	name: item.name + ' ' + (index + 1),
	key: item.key + index
}))

const AdminTable = () => {
	return (
		<Table size={'middle'} showHeader title={( ) => 'Admins'} rowKey={record => record.name} dataSource={datas}>
			<Column title={'Name'} dataIndex={'name'} key={'name'} />
			<Column title={'Permission'} dataIndex={'permissions'} key={'permissions'} render={( value: string[] ) => {
				return (
					<>
						{
							value.map(item => (
								<Tag color={'blue'}>{item}</Tag>
							))
						}
					</>
				)
			}} />
			<Column title={'Action'} key={'action'} render={() => (
				<Space>
					<Button size={'small'} type={'primary'} icon={<EditFilled />}>Edit</Button>
					<Button size={'small'} danger icon={<DeleteFilled />}>Delete</Button>
				</Space>
			)} />
		</Table>
	)
}

export default AdminTable