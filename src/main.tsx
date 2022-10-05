import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.less'
import { BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from './provider'
import { Provider } from 'react-redux'
import store from './store'
import { verifyAction } from './store/actions/authActions'

const root = createRoot(document.getElementById('root') as HTMLElement)

store.dispatch(verifyAction())

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<SidebarProvider>
				<App />
			</SidebarProvider>
		</BrowserRouter>
	</Provider>
)

root.render(app)
