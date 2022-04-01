import type { GroceryItem } from '../components/GroceryList/GroceryList'

// for now changing this will break integration tests
export const groceryItems: GroceryItem[] = [
	{ id: 1, text: 'bread' },
	{ id: 2, text: 'milk' },
	{ id: 3, text: 'oranges' },
	{ id: 4, text: 'chicken' },
	{ id: 5, text: 'rice' }
]

// const loadGroceryList = () => groceryItems

const createGroceryItem = async (text: string): Promise<void> => {
	const id = groceryItems.length + 1

	groceryItems.unshift({ id, text })
}

// const url = 'http://localhost:3001/list'

const getGroceryList = async (): Promise<{ data: GroceryItem[] }> => ({
	data: groceryItems
})

// const createGroceryItem = async (item: GroceryItem): Promise<void> => {
//   const body = JSON.stringify(item)
//   await fetch(url, { method: 'POST', body })
// }

export { createGroceryItem, getGroceryList }
