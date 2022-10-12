import React from 'react'
import { Form, Input, Button } from 'antd'

const { Item } = Form

const AdminCreateForm = () => {
	return (
		<Form layout={'vertical'}>
			<Item label={'Username'} name={'username'}>
				<Input/>
			</Item>
			<Item>

			</Item>
		</Form>
	)
}

export default AdminCreateForm