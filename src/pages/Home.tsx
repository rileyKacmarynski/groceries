import {
	createGroceryItem,
	getGroceryList,
	reorderGroceryItems,
} from 'api/groceryClient'
import type { GroceryItem } from 'components/GroceryList'
import GroceryList from 'components/GroceryList'
import Button from 'components/ui/baseLibrary/Button'
import {
	Toast,
	ToastAction,
	ToastDescription,
	ToastTitle,
} from 'components/ui/baseLibrary/Toast'
import type React from 'react'
import { useEffect, useState } from 'react'

const Toastie: React.FC<{ removeToast: () => void }> = ({ removeToast }) => {
	const [isOpen, setIsOpen] = useState(true)

	const onRemove = (open: boolean) => {
		removeToast()
		setIsOpen(open)
	}

	return (
		<Toast open={isOpen} onOpenChange={onRemove}>
			<ToastTitle>Toastie BOI</ToastTitle>
			<ToastDescription>This is a really toastie boi</ToastDescription>
			<ToastAction asChild altText='ope'>
				<Button>ope</Button>
			</ToastAction>
		</Toast>
	)
}

const ToastieBoi = () => {
	const [length, setLength] = useState(0)
	// const [isOpen, setIsOpen] = useState(false)

	const addToast = () => {
		setLength(l => l + 1)
	}

	const removeToast = () => {
		setLength(l => l - 1)
	}

	return (
		<>
			{/* <Button onClick={() => setIsOpen(o => !o)}>Open Toastie</Button> */}
			<Button onClick={addToast}>Open Toastie</Button>
			{Array.from({ length }, (_, i) => (
				<Toastie key={i} removeToast={removeToast} />
			))}
		</>
	)
}

export default function Home() {
	const [items, setItems] = useState<GroceryItem[]>([])

	useEffect(() => {
		async function fetchItems(): Promise<void> {
			const { data } = await getGroceryList()
			setItems(data)
		}

		void fetchItems()
	}, [])

	const addItem = async (text: string) => {
		// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
		const item = await createGroceryItem(text)
		setItems([...items, item])
	}

	const removeItem = async (id: string) => {
		setItems(i => i.filter(item => item.id !== id))
	}

	const reorderItems = async (oldIndex: number, newIndex: number) => {
		const item = items[oldIndex]
		const newItems = [...items]
		newItems.splice(oldIndex, 1)
		newItems.splice(newIndex, 0, item)
		setItems(newItems)

		// not sure who will own this logic yet
		await reorderGroceryItems(oldIndex, newIndex)
	}

	return (
		<>
			<ToastieBoi />
			<GroceryList
				groceryItems={items}
				removeGroceryItem={removeItem}
				createGroceryItem={addItem}
				reorderGroceryItems={reorderItems}
			/>
		</>
	)
}
