import React from 'react'
import { Form, Input } from 'antd'

const { Item, List } = Form

const CreateUserForm = () => {
	return (
		<Form layout={'vertical'} autoComplete={'off'}>
			<Item label={'Username'} name={'username'} rules={[
				{
					required: true,
					min: 4,
					type: 'string',
					message: 'Username is required'
				}
			]}>
				<Input />
			</Item>
			<Item label={'Password'} name={'password'} rules={[
				{
					required: true,
					min: 4,
					type: 'string',
					message: 'Password is required'

				}
			]}>
				<Input />
			</Item>
		</Form>
	)
}

export default CreateUserForm