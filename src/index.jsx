import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './components/screens/Home/Home'
import Layout from './components/layout/Layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './providers/AuthProvider'

const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Layout>
				<AuthProvider>
					<Home />
				</AuthProvider>
			</Layout>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
