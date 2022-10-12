import React, { CSSProperties } from 'react'
import { Spin } from 'antd'

const styles: CSSProperties = {
	height: '100vh',
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'fixed',
	top: 0,
	left: 0,
	background: 'rgba(255,255,255, 0.6)',
	backdropFilter: 'blur(2px)',
	zIndex: 111
}

const LoadingPage = () => {
	return (
		<div style={styles}>
			<Spin size={'large'} style={{
				transform: 'scale(2)'
			}}/>
		</div>
	)
}

export default LoadingPage