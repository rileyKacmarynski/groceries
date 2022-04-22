/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
	DraggableProvided,
	DraggableStateSnapshot,
	DropResult,
} from 'react-beautiful-dnd'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

interface DraggableListProps {
	onDragEnd: (result: Required<DropResult>) => Promise<void>
	// children: (
	// 	provided: DroppableProvided,
	// 	snapshot: DroppableStateSnapshot,
	// ) => React.ReactNode
	children: React.ReactNode
}

const DraggableList: React.FC<DraggableListProps> = ({
	onDragEnd,
	children,
}) => {
	const onDragEndWrapper = async (result: DropResult) => {
		const { destination, source } = result

		if (!destination) {
			return
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return
		}

		// I should be able to create a type expression for this
		// but this is easier
		await onDragEnd(result as Required<DropResult>)
	}

	return (
		<DragDropContext onDragEnd={onDragEndWrapper}>
			<Droppable droppableId='fuckthis'>
				{(provided, snapshot) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						{/* {children(provided, snapshot)} */}
						{children}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	)
}

interface DraggableListItemProps {
	children: (
		provided: DraggableProvided,
		snapshot: DraggableStateSnapshot,
	) => React.ReactNode
	dragIndex: number
	dragId: string
}

const DraggableListItem: React.FC<DraggableListItemProps> = ({
	children,
	dragId,
	dragIndex,
}) => (
	<Draggable draggableId={dragId} key={dragId} index={dragIndex}>
		{(dragProvided, snapshot) => (
			<div
				ref={dragProvided.innerRef}
				{...dragProvided.draggableProps}
				{...dragProvided.dragHandleProps}
			>
				{children(dragProvided, snapshot)}
			</div>
		)}
	</Draggable>
)

// eslint-disable-next-line import/prefer-default-export
export { DraggableList, DraggableListItem }
