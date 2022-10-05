import React, { CSSProperties } from 'react'
import { Layout } from 'antd'
import Title from './Title'

const AntHeader = Layout.Header

const styles: CSSProperties = {
	background: '#fff',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center'
}


const Header = () => {
	return (
		<AntHeader style={styles} >
			<Title />
		</AntHeader>
	)
}

export default Header