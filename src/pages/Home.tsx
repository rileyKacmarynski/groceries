import { createGroceryItem, getGroceryList } from 'api/groceryClient'
import GroceryForm from 'components/GroceryList/GroceryForm'
import GroceryList from 'components/GroceryList/GroceryList'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'

export interface GroceryItem {
	id: number
	text: string
}

export default function Home(): ReactElement {
	const [items, setItems] = useState<GroceryItem[]>([])

	useEffect(() => {
		async function fetchItems(): Promise<void> {
			const { data } = await getGroceryList()
			setItems(data)
		}

		void fetchItems()
	})

	return (
		<main>
			<GroceryForm addItem={createGroceryItem} />
			<GroceryList groceryItems={items} />
		</main>
	)
}
