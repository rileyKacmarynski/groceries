import GroceryList from 'components/GroceryList'
import { useGroceryList } from 'components/GroceryList/ListContext'
import type { ReactElement } from 'react'

export default function Home(): ReactElement {
	const { list, addItem } = useGroceryList()

	// useEffect(() => {
	// 	async function fetchItems(): Promise<void> {
	// 		const { data } = await getGroceryList()
	// 		setItems(data)
	// 	}

	// 	void fetchItems()
	// })

	return (
		<main>
			<GroceryList groceryItems={list.items} createGroceryItem={addItem} />
		</main>
	)
}
