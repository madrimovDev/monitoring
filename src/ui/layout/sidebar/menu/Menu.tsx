import React, { useEffect, useState } from 'react'
import { Menu as AntMenu, MenuProps } from 'antd'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '@hook'
import { auth } from '@store'
import { sidebarData } from '@utils'
import { menuItems } from '@ui/layout/sidebar/menu/menuItems'

const Menu = () => {
	const { pathname } = useLocation()
	const [currentPage, setCurrentPage] = useState<string>(pathname)
	const { data: authData } = useAppSelector(auth)

	const items = sidebarData(menuItems, authData?.permissions || [])

	useEffect(() => {
		setCurrentPage(pathname)
	}, [pathname])

	return (
		<AntMenu theme={'light'} mode={'inline'} defaultSelectedKeys={[currentPage]} selectedKeys={[currentPage]}
						 style={{ marginTop: '60px' }} items={items} />
	)
}

export default Menu