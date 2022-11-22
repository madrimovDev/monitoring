import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'
import { SidebarProvider } from './provider'
import { Provider } from 'react-redux'
import { store } from '@store'
import { verifyAction } from '@store/actions'
import { RouterProvider } from 'react-router-dom'
import { routes } from '@routes'
import { Button } from 'antd'
import { ReloadOutlined } from '@ant-design/icons'

const root = createRoot(document.getElementById('root') as HTMLElement)

store.dispatch(verifyAction())

const app = (
        <Provider store={store}>
          <SidebarProvider>
            <RouterProvider router={routes} />
          </SidebarProvider>
          <Button type={'primary'} danger shape={'round'} size={'large'}
                  style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px'
                  }} onClick={() => {
            window.location.reload()
          }} icon={<ReloadOutlined />} />
        </Provider>
)

root.render(app)
