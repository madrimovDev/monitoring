import { ReactNode } from 'react'
import {
	ControlOutlined,
	DashboardOutlined,
	DatabaseOutlined,
	GroupOutlined,
	TeamOutlined,
	UserOutlined
} from '@ant-design/icons'

export interface MenuItems {
	key: string
	path: string
	name: string
	icon: ReactNode
	disabled?: boolean
}

export const menuItems: MenuItems[] = [
	{
		key: 'dashboard',
		name: 'Dashboard',
		path: '/',
		icon: <DashboardOutlined />
	},
	{
		key: 'admins',
		name: 'Admins',
		path: '/admins',
		icon: <ControlOutlined />
	},
	{
		key: 'teachers',
		name: 'Teachers',
		path: '/teachers',
		icon: <GroupOutlined />
	},
	{
		key: 'students',
		name: 'Students',
		path: '/students',
		icon: <UserOutlined />
	},
	{
		key: 'groups',
		name: 'Groups',
		path: '/groups',
		icon: <TeamOutlined />
	},
	{
		key: 'directions',
		name: 'Directions',
		path: '/directions',
		icon: <DatabaseOutlined />
	}
]
