import React from 'react'
import { Table, Tag } from 'antd'

interface Direction {
	id: number
	name: string
}

interface Teacher {
	id: number
	name: string
	directions: Direction[]
}

const data: Teacher = {
	id: Date.now(),
	name: 'Teacher',
	directions: [
		{
			id: Date.now(),
			name: 'Frontend'
		},
		{
			id: Date.now(),
			name: 'Web Kids'
		}
	]
}

const datas: Teacher[] = new Array(5).fill(data).map(( item, index ) => ({
	...item,
	name: item.name + ' ' + (index + 1)
}))

const { Column } = Table

const TeacherTable = () => {
	return (
		<Table size={'middle'} showHeader title={() => 'Teachers'} rowKey={record => record.name} dataSource={datas}>
			<Column title={'Name'} dataIndex={'name'} key={'name'} />
			<Column title={'Directions'} dataIndex={'directions'} key={'directions'} render={( direction: Direction[] ) => (
				<>
					{
						direction.map(( item, index ) => (
							<Tag color={'green'} key={item.id}>{item.name}</Tag>
						))
					}
				</>
			)} />
		</Table>
	)
}

export default TeacherTable