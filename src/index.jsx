import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/screens/Home/App'
import Layout from './components/layout/Layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './providers/AuthProvider'

const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Layout>
				<AuthProvider>
					<App />
				</AuthProvider>
			</Layout>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
