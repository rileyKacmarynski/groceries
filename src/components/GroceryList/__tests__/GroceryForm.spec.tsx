/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { GroceryFormProps } from 'components/GroceryList/GroceryForm'
import GroceryForm, {
	ITEM_SUBMIT_BUTTON_TEST_ID,
	ITEM_TEXT_INPUT_TEST_ID,
} from 'components/GroceryList/GroceryForm'
import { describe, expect, it, vi } from 'vitest'
import { ITEM_ADD_BUTTON_TEST_ID } from '../AddButton'

describe('GroceryForm', () => {
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

	const getAdd = () =>
		screen.queryByTestId<HTMLButtonElement>(ITEM_ADD_BUTTON_TEST_ID)

	const findAdd = async () =>
		screen.findByTestId<HTMLButtonElement>(ITEM_ADD_BUTTON_TEST_ID)

	it('does not show the form initially', async () => {
		renderWithProps()
		expect(screen.queryByTestId(ITEM_TEXT_INPUT_TEST_ID)).toBeNull()
		expect(getAdd()).not.toBeNull()
	})

	it('will show the form after clicking add', async () => {
		renderWithProps()

		await userEvent.click(await findAdd())

		expect(getAdd()).toBeNull()
		expect(await getInput()).not.toBeNull()
		expect(await getSubmit()).not.toBeNull()
	})

	it('will not submit with empty input', async () => {
		renderWithProps()

		await userEvent.click(await findAdd())
		await userEvent.click(await getSubmit())

		expect(addItem).not.toHaveBeenCalled()
	})

	it('will submit', async () => {
		renderWithProps()

		await userEvent.click(await findAdd())
		await userEvent.type(await getInput(), itemText)
		await userEvent.click(await getSubmit())

		expect(addItem).toHaveBeenCalledWith(itemText)
	})

	it('closes the form after submitting', async () => {
		renderWithProps()
		await userEvent.click(await findAdd())
		await userEvent.type(await getInput(), itemText)
		await userEvent.click(await getSubmit())

		await waitFor(async () =>
			expect(screen.queryByTestId(ITEM_TEXT_INPUT_TEST_ID)).toBeNull(),
		)
	})
})
