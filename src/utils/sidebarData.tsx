import { MenuItems } from '@ui/layout/sidebar/menu/menuItems'
import { MenuProps } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'


const sidebarData = ( menuItems: MenuItems[], permissions: string[] ) => {
	const _menuItems: MenuProps['items'] = []

	menuItems.forEach(( item ) => {
		if (permissions.includes(item.key)) {
			_menuItems.push({
				key: item.path,
				icon: item.icon,
				label: <Link to={item.path} children={item.name} />
			})
		}
	})

	return _menuItems
}

export default sidebarData