export interface GroceryItem {
	id: number
	text: string
}

export interface GroceryListProps {
	groceryItems: GroceryItem[]
}

function GroceryList({ groceryItems }: GroceryListProps) {
	return (
		<ul>
			{groceryItems.map(item => (
				<li key={item.id}>{item.text}</li>
			))}
		</ul>
	)
}

export default GroceryList
