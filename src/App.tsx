import Layout from 'components/ui/Layout/Layout'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(async () => import('pages/Home'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Layout>
				<Suspense fallback={<div>...loading</div>}>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</Suspense>
			</Layout>
		</BrowserRouter>
	)
}
