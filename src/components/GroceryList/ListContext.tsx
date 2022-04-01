/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable unicorn/no-null */
import * as React from 'react'
import type { GroceryItem } from './GroceryList'

interface ListContextInterface {
	items: GroceryItem[]
	// eslint-disable-next-line no-unused-vars
	addGroceryItem: (text: string) => Promise<void>
	loadGroceryItems: () => Promise<void>
}

const ListContext = React.createContext<ListContextInterface | null>(null)

function GroceryListProvider() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [items, setItems] = React.useState<GroceryItem[]>([])

	// const addGroceryItem = async (text: string) => {
	//   const id = items.length + 1
	//   const newItem = { id, text }
	//   const newItems = [newItem, ...items]
	//   await groceryClient.createGroceryItem(newItem)
	//   setItems(newItems)
	// }
	// const loadGroceryItems = async () => {
	//   const items = await groceryClient.loadGroceryList()
	//   setItems(items)
	// }
	//   const value = {
	//     items,
	//     addGroceryItem,
	//     loadGroceryItems: () => [],
	//   }
	return <>yo</>

	//   return <ListContext.Provider value={value}>{children}</ListContext.Provider>
}

export const useGroceryList = () => {
	const context = React.useContext(ListContext)
	if (!context) {
		throw new Error('Unble to get context. Make sure you are inside a provider')
	}

	return context
}

export default GroceryListProvider
