import React, { CSSProperties } from 'react'
import { Layout } from 'antd'
import Title from './Title'

const AntHeader = Layout.Header

const styles: CSSProperties = {
	background: '#fff',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	boxShadow: '0 5px 5px rgba(0,0,0, 0.04)',
	borderLeft: '1px solid rgba(0,0,0, 0.05)'
}


const Header = () => {
	return (
		<AntHeader style={styles} >
			<Title />
		</AntHeader>
	)
}

export default Header