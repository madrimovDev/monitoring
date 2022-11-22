import { ReloadOutlined } from '@ant-design/icons'
import { routes } from '@routes'
import { store } from '@store'
import { verifyAction } from '@store/actions'
import { Button } from 'antd'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import './index.less'
import { SidebarProvider } from './provider'

const root = createRoot(document.getElementById('root') as HTMLElement)

store.dispatch(verifyAction())

const app = (
	<Provider store={store}>
		<SidebarProvider>
			<RouterProvider router={routes} />
		</SidebarProvider>
		<Button
			type={'primary'}
			danger
			shape={'circle'}
			size={'large'}
			style={{
				position: 'fixed',
				bottom: '20px',
				right: '20px',
			}}
			onClick={() => {
				window.location.reload()
			}}
			icon={<ReloadOutlined />}
		/>
	</Provider>
)

root.render(app)
