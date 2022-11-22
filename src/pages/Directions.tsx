import React, { useEffect } from 'react'
import { Button, Col, Divider, Row, Space } from 'antd'
import { FolderAddOutlined } from '@ant-design/icons'
import { DirectionsList, Modal } from '@ui'
import { useAppDispatch } from '@hook'
import { getAllDirections } from '@store/actions/directionsActions'
import { openModal } from '@store/actions/modalActions'

const Directions = () => {
	const dispatch = useAppDispatch()

	const onOpen = () => {
		dispatch(
			openModal({
				type: 'direction',
				entity: 'create',
			})
		)
	}

	useEffect(() => {
		dispatch(getAllDirections())
	}, [])

	return (
		<>
			<Row style={{ marginTop: 60 }}>
				<Col
					span={18}
					offset={3}>
					<Space style={{ justifyContent: 'end', width: '100%' }}>
						<Button
							onClick={onOpen}
							type={'primary'}
							icon={<FolderAddOutlined />}>
							Create Direction
						</Button>
					</Space>
					<Divider />
					<DirectionsList />
				</Col>
			</Row>
			<Modal />
		</>
	)
}

export default Directions
