import { createContext } from 'react'

interface SidebarContextType {
	open: boolean
	onOpen: () => void
	onClose: () => void
	onToggle: () => void
}

const SidebarContext = createContext<SidebarContextType>({} as SidebarContextType)

export default SidebarContext