import React from 'react'
import { Form, Input } from 'antd'

const { Item, List } = Form

const CreateUserForm = () => {
	return (
		<Form layout={'vertical'}>
			<Item label={'Username'} rules={[
				{
					required: true,
					min: 4,
					type: 'string'
				}
			]}>
				<Input />
			</Item>
			<Item label={'Password'} rules={[
				{
					required: true,
					min: 4,
					type: 'string'
				}
			]}>
				<Input.Password />
			</Item>
		</Form>
	)
}

export default CreateUserForm