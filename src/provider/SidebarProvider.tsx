import React, { ReactNode, useState } from 'react'
import { SidebarContext } from '@/context'

interface SidebarProviderPropsType {
	children: ReactNode
}

const SidebarProvider = ({children}: SidebarProviderPropsType) => {
	const [open, setOpen] = useState<boolean>(false)
	const onOpen = () => setOpen(true)
	const onClose = () => setOpen(false)
	const onToggle = () => setOpen(value => !value)
	const value = {
		open, onOpen, onClose, onToggle
	}

	return (
		<SidebarContext.Provider value={value}>
			{children}
		</SidebarContext.Provider>
	)
}

export default SidebarProvider