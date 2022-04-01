import GroceryForm from './GroceryForm'

export interface GroceryItem {
	id: number
	text: string
}

export interface GroceryListProps {
	groceryItems: GroceryItem[]
	createGroceryItem: (text: string) => Promise<void>
}

function GroceryList({ groceryItems, createGroceryItem }: GroceryListProps) {
	return (
		<>
			<GroceryForm addItem={createGroceryItem} />
			<ul>
				{groceryItems.map(item => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</>
	)
}

export default GroceryList
