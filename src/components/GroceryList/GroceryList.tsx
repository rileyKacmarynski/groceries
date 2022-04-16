import { H2, H3 } from 'components/ui/baseLibrary/typography/Headings'
import styled from 'components/ui/theme'
import GroceryForm from './GroceryForm'
import GroceryItem from './GroceryItem'

// eslint-disable-next-line @typescript-eslint/no-redeclare
export interface GroceryItem {
	id: number
	text: string
}

export interface GroceryListProps {
	groceryItems: GroceryItem[]
	createGroceryItem: (text: string) => Promise<void>
	removeGroceryItem: (id: number) => Promise<void>
}

const Ul = styled('ul', {
	// reset
	padding: 0,
	listStyle: 'none',

	color: '$slate12',
	// borderBottom: '1px solid $colors$slate7',

	marginBottom: '$space$2',

	'& > li': {
		py: '$space$1',
	},
})

const ContentHeader = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '$space$2',
})

function GroceryList({
	groceryItems,
	createGroceryItem,
	removeGroceryItem,
}: GroceryListProps) {
	return (
		<section aria-label='Grocery list'>
			<ContentHeader>
				<H2
					id='groceries-heading'
					css={{ marginBottom: '$1', color: '$slate12' }}
				>
					Groceries
				</H2>
				<H3 css={{ fontSize: '$1', color: '$slate10' }}>
					{new Date().toLocaleDateString()}
				</H3>
			</ContentHeader>
			<Ul aria-labelledby='groceries-heading'>
				{groceryItems.map(item => (
					<GroceryItem
						key={item.id}
						text={item.text}
						remove={async () => removeGroceryItem(item.id)}
					/>
				))}
			</Ul>
			<GroceryForm addItem={createGroceryItem} />
		</section>
	)
}

export default GroceryList
