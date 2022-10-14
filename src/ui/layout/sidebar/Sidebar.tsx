import React from 'react'
import { Layout } from 'antd'
import { useSidebar } from '@hook'
import Menu from './menu/Menu'

const { Sider } = Layout


const Sidebar = () => {
	const { open, onToggle } = useSidebar()
	return (
		<Sider theme={'light'} collapsed={open} defaultCollapsed={open} onCollapse={onToggle} collapsible breakpoint={'sm'}>
			<Menu />
		</Sider>
	)
}

export default Sidebar