import App from 'App'
import GroceryListProvider from 'components/GroceryList/ListContext'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { registerSW } from 'virtual:pwa-register'
import './index.css'

registerSW()

const MAX_RETRIES = 1
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
			retry: MAX_RETRIES
		}
	}
})

ReactDOM.render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<GroceryListProvider>
				<App />
			</GroceryListProvider>
		</QueryClientProvider>
	</StrictMode>,
	document.querySelector('#root')
)
