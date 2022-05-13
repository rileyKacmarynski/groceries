/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { GroceryItem, GroceryListProps } from '../GroceryList'
import GroceryList from '../GroceryList'

describe('<GroceryList />', () => {
	const items: GroceryItem[] = [
		{ id: '1', text: 'bread', sortOrder: 1 },
		{ id: '2', text: 'milk', sortOrder: 2 },
	]

	// eslint-disable-next-line no-unused-vars
	// eslint-disable-next-line unicorn/consistent-function-scoping
	// let loadGroceryList = () => {}

	const renderWithProps = (propOverrides: Partial<GroceryListProps> = {}) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const props: GroceryListProps = {
			// loadGroceryList: vi.fn<[], GroceryItem[]>(() => items),
			createGroceryItem: vi.fn<[string], Promise<void>>(async () => {}),
			removeGroceryItem: vi.fn<[string], Promise<void>>(async () => {}),
			reorderGroceryItems: vi.fn<[number, number], Promise<void>>(
				async () => {},
			),
			groceryItems: items,
			...propOverrides,
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		// loadGroceryList = props.loadGroceryList

		render(<GroceryList {...props} />)
	}

	// skipping loading for now
	it('displays the list', () => {
		renderWithProps()
		expect(screen.getByText('bread')).not.toBeNull()
		expect(screen.getByText('milk')).not.toBeNull()
	})

	it('removes items', async () => {
		const removeItemMock = vi.fn<[string], Promise<void>>()
		// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
		// const removeItemMock = async (id: number) => console.log(id)
		renderWithProps({ removeGroceryItem: removeItemMock })

		const list = screen.getByRole('list', {
			name: /groceries/i,
		})

		const item = within(list).getAllByRole('listitem')[0]
		const button = within(item).getByRole('checkbox')

		await userEvent.click(button)

		expect(removeItemMock).toHaveBeenCalledWith('1')
	})
})
