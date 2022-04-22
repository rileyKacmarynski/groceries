/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { GroceryFormProps } from 'components/GroceryList/GroceryForm'
import GroceryForm, {
	ITEM_SUBMIT_BUTTON_TEST_ID,
	ITEM_TEXT_INPUT_TEST_ID,
} from 'components/GroceryList/GroceryForm'
import { describe, expect, it, vi } from 'vitest'

describe('<GroceryForm />', () => {
	const itemText = 'apple'

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let addItem = async (text: string): Promise<void> => {}

	const renderWithProps = async (
		propOverrides: Partial<GroceryFormProps> = {},
	) => {
		const props = {
			addItem: vi.fn(),
			...propOverrides,
		}

		addItem = props.addItem

		render(<GroceryForm {...props} />)
	}

	const getInput = async () =>
		// eslint-disable-next-line @typescript-eslint/return-await
		screen.findByTestId<HTMLInputElement>(ITEM_TEXT_INPUT_TEST_ID)

	const getSubmit = async () =>
		screen.findByTestId<HTMLButtonElement>(ITEM_SUBMIT_BUTTON_TEST_ID)

	it('will not submit with empty input', async () => {
		renderWithProps()

		await userEvent.click(await getSubmit())

		expect(addItem).not.toHaveBeenCalled()
	})

	it('shows the button as disabled when the input is empty', async () => {
		renderWithProps()

		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		expect(await getSubmit()).toBeDisabled()
	})

	it('will submit', async () => {
		renderWithProps()

		await userEvent.type(await getInput(), itemText)
		await userEvent.click(await getSubmit())

		expect(addItem).toHaveBeenCalledWith(itemText)
	})
})
