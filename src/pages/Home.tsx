import { createGroceryItem, getGroceryList } from 'api/groceryClient'
import type { GroceryItem } from 'components/GroceryList'
import GroceryList from 'components/GroceryList'
import { useEffect, useState } from 'react'

export default function Home() {
	const [items, setItems] = useState<GroceryItem[]>([])

	useEffect(() => {
		async function fetchItems(): Promise<void> {
			const { data } = await getGroceryList()
			setItems(data)
		}

		void fetchItems()
	})

	const addItem = async (text: string) => {
		await createGroceryItem(text)
		setItems([...items, { id: items.length + 1, text }])
	}

	return (
		<main>
			<GroceryList groceryItems={items} createGroceryItem={addItem} />
		</main>
	)
}
