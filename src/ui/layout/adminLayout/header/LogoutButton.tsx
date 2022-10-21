import React from 'react'
import { useAppDispatch } from '@hook'
import { Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { logoutAction } from '@store/actions'

const LogoutButton = () => {
	const dispatch = useAppDispatch()

	const logout = () => {
		dispatch(logoutAction())
		window.location.reload()
	}

	return (
		<Button onClick={logout} size={'small'} type={'text'} icon={<LogoutOutlined />} danger>
			Logout
		</Button>
	)
}

export default LogoutButton
