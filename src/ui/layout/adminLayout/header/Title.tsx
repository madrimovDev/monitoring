import React from 'react'
import { PageHeader } from 'antd'
import { useLocation } from 'react-router-dom'
import { pathnameParse } from '@utils'

const Title = () => {
	const { pathname } = useLocation()
	const title = pathnameParse({
		def: 'Dashboard',
		pathname,
	})
	return (
		<PageHeader
			style={{ textTransform: 'capitalize', padding: 0 }}
			title={title}
		/>
	)
}

export default Title
