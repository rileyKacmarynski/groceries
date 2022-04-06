/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { GroceryFormProps } from 'components/GroceryList/GroceryForm'
import GroceryForm, {
	ITEM_SUBMIT_BUTTON_TEST_ID,
	ITEM_TEXT_INPUT_TEST_ID,
} from 'components/GroceryList/GroceryForm'
import { act } from 'react-dom/test-utils'
import { describe, expect, it, vi } from 'vitest'

describe('GroceryForm', () => {
	const itemText = 'apple'

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let addItem = async (text: string): Promise<void> => {}

	const renderWithProps = (propOverrides: Partial<GroceryFormProps> = {}) => {
		const props = {
			addItem: vi.fn(),
			...propOverrides,
		}

		addItem = props.addItem

		render(<GroceryForm {...props} />)
	}

	const getInput = () =>
		screen.queryByTestId(ITEM_TEXT_INPUT_TEST_ID) as HTMLInputElement

	const getSubmit = () =>
		screen.queryByTestId(ITEM_SUBMIT_BUTTON_TEST_ID) as HTMLButtonElement

	it('initially has an empty input', () => {
		renderWithProps()
		expect(getInput().value).toBe('')
	})

	it('will not submit with empty input', async () => {
		renderWithProps()

		await userEvent.click(getSubmit())

		expect(addItem).not.toHaveBeenCalled()
	})

	it('will submit', async () => {
		renderWithProps()
		await userEvent.type(getInput(), itemText)

		await act(async () => {
			await userEvent.click(getSubmit())
		})

		expect(addItem).toHaveBeenCalledWith(itemText)
	})

	it('clears the form after submitting', async () => {
		renderWithProps()
		await userEvent.type(getInput(), itemText)
		await act(async () => {
			await userEvent.click(getSubmit())
		})

		await waitFor(() => expect(getInput().value).toBe(''))
	})
})
