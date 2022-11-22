import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { fieldsData } from '@utils'
import { useAppDispatch, useAppSelector } from '@hook'
import { directions, modal } from '@store/selectors/selectors'
import { createDirection, updateDirection } from '@store/actions'
import { NewDirection } from '@services/types/directionsTypes'
import { closeModal } from '@store/actions/modalActions'

const { Item } = Form

const DirectionCreateForm = () => {
	const { data, entity, open } = useAppSelector(modal)
	const { status } = useAppSelector(directions)
	const fields = fieldsData(data)
	const [form] = Form.useForm()

	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!open) {
			form.resetFields()
		}
	}, [open])

	// useEffect(() => {
	// 	if (status === 'FULFILLED') {
	// 		dispatch(closeModal())
	// 	}
	// }, [status])

	const onFinish = (d: NewDirection) => {
		if (entity === 'create') {
			dispatch(closeModal())

			return dispatch(createDirection(d))
		}
		if (entity === 'update') {
			dispatch(closeModal())

			return dispatch(
				updateDirection({
					id: data?.id || 0,
					direction: d,
				})
			)
		}
	}

	return (
		<Form
			onFinish={onFinish}
			layout={'vertical'}
			fields={fields}
			form={form}>
			<Item
				label={'Name'}
				name={'name'}>
				<Input />
			</Item>
			<Item>
				<Button
					loading={status === 'PENDING'}
					style={{ textTransform: 'capitalize' }}
					htmlType={'submit'}
					type={'primary'}>
					{entity}
				</Button>
			</Item>
		</Form>
	)
}

export default DirectionCreateForm
