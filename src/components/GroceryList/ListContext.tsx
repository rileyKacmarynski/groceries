import * as React from 'react'

export interface GroceryItem {
	id: number
	text: string
}
export interface GroceryListState {
	items: GroceryItem[]
}

export interface GroceryListStore {
	list: GroceryListState
	addItem: (text: string) => Promise<void>
}

const ListContext = React.createContext<GroceryListStore | undefined>(undefined)

const initialState: GroceryListState = {
	items: [
		{ id: 1, text: 'bread' },
		{ id: 2, text: 'milk' }
	]
}

const GroceryListProvider: React.FC = ({ children }) => {
	const [state, setState] = React.useState(initialState)

	const addItem = React.useCallback(
		async (text: string) => {
			setState({
				items: [
					...state.items,
					{
						id: state.items.length + 1,
						text
					}
				]
			})
		},
		[state.items]
	)

	const value = React.useMemo(
		() => ({ list: state, addItem }),
		[state, addItem]
	)

	return <ListContext.Provider value={value}>{children}</ListContext.Provider>
}

export const useGroceryList = () => {
	const context = React.useContext(ListContext)
	if (!context) {
		throw new Error('Unble to get context. Make sure you are inside a provider')
	}

	return context
}

export default GroceryListProvider
