import React from 'react'
import { useAppDispatch, useAppSelector } from '@hook'
import { directions } from '@store'
import { Button, List, Space, Tag } from 'antd'
import { DeleteFilled, EditFilled } from '@ant-design/icons'
import { openModal } from '@store/actions/modalActions'
import { Direction } from '@services/types/directionsTypes'
import { deleteDirection } from '@store/actions'

const { Item } = List

const DirectionsList = () => {
	const { data, status } = useAppSelector(directions)
	const dispatch = useAppDispatch()

	const onEdit = (d: Direction) => {
		dispatch(
			openModal({
				type: 'direction',
				entity: 'update',
				data: d,
			})
		)
	}

	const onDelete = (id: number) => {
		dispatch(deleteDirection(id))
	}

	return (
		<List
			style={{ background: '#fff' }}
			size={'large'}
			loading={status === 'PENDING'}
			header={'Directions'}
			bordered>
			{data?.map((direction) => {
				return (
					<Item key={direction.id}>
						<Space>
							<Tag color={direction.status === 'active' ? 'success' : 'error'}>
								{direction.status}
							</Tag>
							{direction.name}
						</Space>
						<Space>
							<Button
								size={'small'}
								onClick={() => onEdit(direction)}
								icon={<EditFilled />}
								type={'primary'}>
								Edit
							</Button>
							<Button
								size={'small'}
								onClick={() => onDelete(direction.id)}
								icon={<DeleteFilled />}
								danger>
								Delete
							</Button>
						</Space>
					</Item>
				)
			})}
		</List>
	)
}

export default DirectionsList
