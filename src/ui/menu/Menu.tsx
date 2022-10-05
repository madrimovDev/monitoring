import React, { useEffect, useState } from 'react'
import { Menu as AntMenu, MenuProps } from 'antd'
import { ControlOutlined, DashboardOutlined, DatabaseOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group'
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type
	} as MenuItem
}

const items: MenuProps['items'] = [
	getItem(<Link to={'/'} children={'Dashboard'} />, '/', <DashboardOutlined style={{
		fontSize: '20px'
	}} />),
	getItem(<Link to={'/admins'} children={'Admins'} />, '/admins', <ControlOutlined style={{
		fontSize: '20px'
	}} />),
	getItem(<Link to={'/teachers'} children={'Teachers'} />, '/teachers', <UserOutlined style={{
		fontSize: '20px'
	}} />),
	getItem(<Link to={'/students'} children={'Students'} />, '/students', <TeamOutlined style={{
		fontSize: '20px'
	}} />),
	getItem(<Link to={'/groups'} children={'Groups'} />, '/groups', <DatabaseOutlined style={{
		fontSize: '20px'
	}} />)
]

const Menu = () => {
	const { pathname } = useLocation()
	const [currentPage, setCurrentPage] = useState<string>(pathname)

	useEffect(() => {
		setCurrentPage(pathname)
	}, [pathname])

	return (
		<AntMenu theme={'light'} mode={'inline'} defaultSelectedKeys={[currentPage]} selectedKeys={[currentPage]} style={{ marginTop: '60px' }} items={items} />
	)
}

export default Menu