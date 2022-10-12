import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'
import { SidebarProvider } from './provider'
import { Provider } from 'react-redux'
import { store } from '@store'
import { verifyAction } from '@store/actions'
import { RouterProvider } from 'react-router-dom'
import { routes } from '@routes'

const root = createRoot(document.getElementById('root') as HTMLElement)

// store.dispatch(verifyAction())

const app = (
	<Provider store={store}>
		<SidebarProvider>
			<RouterProvider router={routes} />
		</SidebarProvider>
	</Provider>
)

root.render(app)
