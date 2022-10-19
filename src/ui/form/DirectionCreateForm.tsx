import React from 'react'
import { Button, Form, Input } from 'antd'
import { fieldsData } from '@utils'
import { useAppSelector } from '@hook'
import { modal } from '@store/selectors/selectors'

const { Item } = Form

const DirectionCreateForm = () => {
	const { data, type, entity, open } = useAppSelector(modal)
	const fields = fieldsData(data)
	const [form] = Form.useForm()
	return (
		<Form layout={'vertical'} fields={fields} form={form}>
			<Item label={'Name'} name={'name'}>
				<Input />
			</Item>
			<Item>
				<Button style={{ textTransform: 'capitalize' }} type={'primary'}>{entity}</Button>
			</Item>
		</Form>
	)
}

export default DirectionCreateForm