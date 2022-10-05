import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.less'
import { BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from './provider'

const root = createRoot(document.getElementById('root') as HTMLElement)

const app = (
	<BrowserRouter>
		<SidebarProvider>
			<App />
		</SidebarProvider>
	</BrowserRouter>
)

root.render(app)
