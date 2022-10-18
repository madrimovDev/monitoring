import React from 'react'
import { useAppSelector } from '@hook'
import { directions } from '@store'
import { Button, List, Space, Tag } from 'antd'
import { DeleteFilled, EditFilled } from '@ant-design/icons'

const { Item } = List

const DirectionsList = () => {
	const { data, status } = useAppSelector(directions)

	return (
		<List style={{ background: '#fff' }} size={'large'} loading={status === 'PENDING'} header={'Directions'} bordered>
			{
				data?.map(direction => {
					return (
						<Item>
							<Space>
								<Tag color={direction.status === 'active' ? 'success' : 'error'}>{direction.status}</Tag>
								{direction.name}
							</Space>
							<Space>
								<Button size={'small'} icon={<EditFilled />} type={'primary'}>Edit</Button>
								<Button size={'small'} icon={<DeleteFilled />} danger>Delete</Button>
							</Space>
						</Item>
					)
				})
			}
		</List>
	)
}

export default DirectionsList