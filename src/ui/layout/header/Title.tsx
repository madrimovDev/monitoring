import React from 'react'
import { Typography } from 'antd'
import { useLocation } from 'react-router-dom'
import { pathnameParse } from '@utils'

const AntTitle = Typography.Title

const Title = () => {
	const { pathname } = useLocation()
	const title = pathnameParse({
		def: 'Dashboard',
		pathname
	})
	return (
		<AntTitle level={4} style={{ width: 'min-content', textTransform: 'capitalize' }}>
			{title}
		</AntTitle>
	)
}

export default Title