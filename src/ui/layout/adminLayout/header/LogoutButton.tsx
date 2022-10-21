import React from 'react'
import { useAppDispatch } from '@hook'
import { Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { logoutAction } from '@store/actions'

const LogoutButton = () => {
	const dispatch = useAppDispatch()


	const logout = () => {
		dispatch(logoutAction())

	}

	return (
		<Button onClick={logout} size={'small'} type={'text'} icon={<LogoutOutlined />} danger>
			<a href='/login'>Logout</a>
		</Button>
	)
}

export default LogoutButton
