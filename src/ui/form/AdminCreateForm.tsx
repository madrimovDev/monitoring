import React from 'react'
import { Form, Input, Button } from 'antd'

const { Item } = Form

const AdminCreateForm = () => {
	return (
		<Form layout={'vertical'}>
			<Item label={'Username'} name={'username'}>
				<Input/>
			</Item>
			<Item label={'Password'} name={'password'}>
				<Input/>
			</Item>

		</Form>
	)
}

export default AdminCreateForm