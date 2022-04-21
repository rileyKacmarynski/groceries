import {
	createGroceryItem,
	getGroceryList,
	reorderGroceryItems,
} from 'api/groceryClient'
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
	}, [])

	const addItem = async (text: string) => {
		const item = await createGroceryItem(text)
		setItems([...items, item])
	}

	const removeItem = async (id: string) => {
		setItems(i => i.filter(item => item.id !== id))
	}

	const reorderItems = async (oldIndex: number, newIndex: number) => {
		const item = items[oldIndex]
		const newItems = [...items]
		newItems.splice(oldIndex, 1)
		newItems.splice(newIndex, 0, item)
		setItems(newItems)

		// not sure who will own this logic yet
		await reorderGroceryItems(oldIndex, newIndex)
	}

	return (
		<GroceryList
			groceryItems={items}
			removeGroceryItem={removeItem}
			createGroceryItem={addItem}
			reorderGroceryItems={reorderItems}
		/>
	)
}
