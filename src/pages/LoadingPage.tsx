import React, { CSSProperties } from 'react'
import { Spin } from 'antd'

const styles: CSSProperties = {
	height: '100vh',
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center'
}

const LoadingPage = () => {
	return (
		<div style={styles}>
			<Spin size={'large'} />
		</div>
	)
}

export default LoadingPage