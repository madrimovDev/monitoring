import React, { CSSProperties, RefObject } from 'react'
import { Button, Layout } from 'antd'
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