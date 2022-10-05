import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
	const navigate = useNavigate()
	return (
		<Result
			status={404} title={404} subTitle={'Woops! Page Not Found'}
			extra={
				<>
					<Button
						type={'primary'}
						onClick={() => navigate('/')}
					>
						Back To Home
					</Button>
					<Button
						onClick={() => navigate('/login')}>
						Login
					</Button>
				</>

			}
		/>
	)
}

export default PageNotFound