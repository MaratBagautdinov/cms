import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/app/index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from '@/store/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from '@/pages/Auth'
import Documentation from '@/pages/Documentation'
import Project from '@/pages/Project'
import Studio from '@/pages/Studio'
import Error from '@/pages/Error'
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error page='App' />,
		children: [
			{
				path: '/documentation',
				element: <Documentation />,
				errorElement: <Error page='Documentation' />
			},
			{
				path: '/auth',
				element: <Auth />,
				errorElement: <Error page='Auth' />
			},
			{
				path: '/studio',
				element: <Studio />,
				errorElement: <Error page='Studio' />
			},
			{
				path: '/project/:key',
				element: <Project />,
				errorElement: <Error page='Project' />
			}
		]
	}
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
