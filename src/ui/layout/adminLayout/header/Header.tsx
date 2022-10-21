import React, { CSSProperties } from 'react'
import { Layout } from 'antd'
import Title from './Title'
import LogoutButton from './LogoutButton'

const AntHeader = Layout.Header

const styles: CSSProperties = {
	background: '#fff',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	boxShadow: '0 5px 5px rgba(0,0,0, 0.04)',
	borderLeft: '1px solid rgba(0,0,0, 0.05)',
	position: 'sticky',
	top: 0,
	zIndex: 111
}


const Header = () => {
	return (
		<AntHeader style={styles}>
			<Title />
			<LogoutButton />
		</AntHeader>
	)
}

export default Header