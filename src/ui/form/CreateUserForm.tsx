import React from 'react'
import { Form, Input } from 'antd'
import { IAdmin, ITeacher } from '@store/types/permissionsType'

const { Item, List } = Form

interface CreateUserFormPropsType {
	data?: ITeacher | IAdmin | null
}

const CreateUserForm = ({data}: CreateUserFormPropsType) => {
	console.log(data)
	return (
		<Form layout={'vertical'} fields={[
			{
				name: 'username',
				value: data?.username
			}
		]} autoComplete={'off'}>
			<Item label={'Username'} name={'username'} rules={[
				{
					required: true,
					min: 4,
					type: 'string',
					message: 'Username is required'
				}
			]}>
				<Input type={'text'} />
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