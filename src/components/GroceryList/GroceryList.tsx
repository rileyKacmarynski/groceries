import { H2, H3 } from 'components/ui/baseLibrary/typography/Headings'
import styled from 'components/ui/theme'
import { AnimatePresence } from 'framer-motion'
import type { DropResult } from 'react-beautiful-dnd'
import { DraggableList, DraggableListItem } from './DraggableList'
import GroceryForm from './GroceryForm'
import GroceryItem from './GroceryItem'

// eslint-disable-next-line @typescript-eslint/no-redeclare
export interface GroceryItem {
	id: string
	text: string
	sortOrder: number
}
export interface GroceryListProps {
	groceryItems: GroceryItem[]
	createGroceryItem: (text: string) => Promise<void>
	removeGroceryItem: (id: string) => Promise<void>
	reorderGroceryItems: (oldIndex: number, newIndex: number) => Promise<void>
}

const Ul = styled('ul', {
	// reset
	padding: 0,
	listStyle: 'none',

	color: '$slate12',
	// borderBottom: '1px solid $colors$slate7',

	marginBottom: '$space$2',

	'& li': {
		py: '$space$1',
	},
})

// interface ItemListProps {
// 	innerRef: HTMLElement | null
// }

// const ItemList: React.FC<ItemListProps> = ({ innerRef }) => {
// 	return (
// 		<div ref={innerRef}>
// 			yo
// 		</div>
// 	)
// }

const ContentHeader = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '$space$2',
})

function GroceryList({
	groceryItems,
	createGroceryItem,
	removeGroceryItem,
	reorderGroceryItems,
}: GroceryListProps) {
	const onDragEnd = async (result: Required<DropResult>) => {
		const { destination, source } = result
		await reorderGroceryItems(source.index, destination.index)
	}

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
			<DraggableList onDragEnd={onDragEnd}>
				<Ul aria-labelledby='groceries-heading'>
					<AnimatePresence>
						{groceryItems.map((item, index) => (
							<DraggableListItem
								key={item.id}
								dragId={item.id}
								dragIndex={index}
							>
								{(provided, snapshot) => (
									<GroceryItem
										text={item.text}
										isDragging={snapshot.isDragging}
										remove={async () => removeGroceryItem(item.id)}
									/>
								)}
							</DraggableListItem>
						))}
					</AnimatePresence>
				</Ul>
			</DraggableList>
			<GroceryForm addItem={createGroceryItem} />
		</section>
	)
}

export default GroceryList
