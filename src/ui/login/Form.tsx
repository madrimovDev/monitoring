import React from 'react'
import { Button, Form as AntForm, Input } from 'antd'
import { useAppDispatch, useAppSelector } from '../../hook'
import { loginAction } from '../../store/actions'

const { Item } = AntForm

const Form = () => {
	const [form] = AntForm.useForm()
	const { status } = useAppSelector(state => state.auth)
	const dispatch = useAppDispatch()

	const finish = ( e: any ) => {
		dispatch(loginAction({
			username: e.username,
			password: e.password
		}))
	}

	return (
		<AntForm form={form} onFinish={finish} layout={'vertical'} size={'large'}>
			<Item name={'username'} rules={[
				{
					required: true,
					min: 3
				}
			]} label={'Username'}>
				<Input placeholder={'Enter your username'} />
			</Item>
			<Item name={'password'} rules={[
				{
					required: true,
					min: 3,
					message: 'Please enter valid password'
				}

			]} label={'Password'}>
				<Input.Password />
			</Item>
			<Item>
				<Button loading={status === 'PENDING'} style={{ width: '100%' }} htmlType={'submit'}
								type={'primary'}>Login</Button>
			</Item>
		</AntForm>
	)
}

export default Form