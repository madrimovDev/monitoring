import React, { CSSProperties } from 'react'
import { Spin } from 'antd'

const styles: CSSProperties = {
	height: '100vh',
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	position: 'fixed',
	top: 0,
	left: 0
}

const LoadingPage = () => {
	return (
		<div style={styles}>
			<Spin size={'large'} />
		</div>
	)
}

export default LoadingPage