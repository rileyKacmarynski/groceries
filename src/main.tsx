import App from 'App'
import GroceryListProvider from 'components/GroceryList/ListContext'
import { AlertProvider } from 'components/ui/baseLibrary/Alert'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'

registerSW()

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)

root.render(
	<StrictMode>
		<GroceryListProvider>
			<AlertProvider>
				<App />
			</AlertProvider>
		</GroceryListProvider>
	</StrictMode>,
)
