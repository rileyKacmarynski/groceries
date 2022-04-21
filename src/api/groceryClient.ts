import { v4 as uuidv4 } from 'uuid'
import type { GroceryItem } from '../components/GroceryList/GroceryList'

// for now changing this will break integration tests
let groceryItems: GroceryItem[] = [
	{ id: '1', text: 'bread', sortOrder: 1 },
	{ id: '2', text: 'milk', sortOrder: 2 },
	{ id: '3', text: 'oranges', sortOrder: 3 },
	{ id: '4', text: 'chicken', sortOrder: 4 },
	{ id: '5', text: 'rice', sortOrder: 5 },
]

// const loadGroceryList = () => groceryItems

const createGroceryItem = async (text: string): Promise<GroceryItem> => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	const id: string = uuidv4()
	const item = { id, text, sortOrder: groceryItems.length + 1 }
	groceryItems.push(item)

	return item
}

// const url = 'http://localhost:3001/list'

const getGroceryList = async (): Promise<{ data: GroceryItem[] }> => ({
	data: groceryItems,
})

const reorderGroceryItems = async (oldIndex: number, newIndex: number) => {
	const item = groceryItems[oldIndex]
	groceryItems.splice(oldIndex, 1)
	groceryItems.splice(newIndex, 0, item)

	groceryItems = groceryItems.map((i, index) => ({
		...i,
		sortOrder: index + 1,
	}))
}

// const createGroceryItem = async (item: GroceryItem): Promise<void> => {
//   const body = JSON.stringify(item)
//   await fetch(url, { method: 'POST', body })
// }

export { createGroceryItem, getGroceryList, reorderGroceryItems }
