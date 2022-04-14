import { H2, H3 } from 'components/ui/baseLibrary/typography/Headings'
import styled from 'components/ui/theme'
import GroceryForm from './GroceryForm'

export interface GroceryItem {
	id: number
	text: string
}

export interface GroceryListProps {
	groceryItems: GroceryItem[]
	createGroceryItem: (text: string) => Promise<void>
}

const Ul = styled('ul', {
	// reset
	padding: 0,
	listStyle: 'none',

	// backgroundColor: '$whiteA4',
	// py: '$space$4',
	color: '$slate12',
	borderBottom: '1px solid $colors$slate7',

	'& > li': {
		py: '$space$1',
	},
})

const ContentHeader = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '$space$2',
})

function GroceryList({ groceryItems, createGroceryItem }: GroceryListProps) {
	return (
		<>
			<ContentHeader>
				<H2 css={{ marginBottom: '$1', color: '$slate12' }}>Groceries</H2>
				<H3 css={{ fontSize: '$1', color: '$slate10' }}>
					{new Date().toLocaleDateString()}
				</H3>
			</ContentHeader>
			<Ul>
				{groceryItems.map(item => (
					<li key={item.id}>{item.text}</li>
				))}
			</Ul>
			<GroceryForm addItem={createGroceryItem} />
		</>
	)
}

export default GroceryList
