/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import type { GroceryListProps } from '../GroceryList'
import GroceryList from '../GroceryList'

describe('GroceryList', () => {
	const items = [
		{ id: 1, text: 'bread' },
		{ id: 1, text: 'milk' }
	]

	// eslint-disable-next-line no-unused-vars
	// eslint-disable-next-line unicorn/consistent-function-scoping
	// let loadGroceryList = () => {}

	const renderWithProps = (propOverrides: Partial<GroceryListProps> = {}) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const props: GroceryListProps = {
			// loadGroceryList: vi.fn<[], GroceryItem[]>(() => items),
			createGroceryItem: vi.fn<[string], Promise<void>>(async () => {}),
			groceryItems: items,
			...propOverrides
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
})
