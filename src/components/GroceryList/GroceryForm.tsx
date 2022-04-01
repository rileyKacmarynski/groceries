import type { FormEvent } from 'react'
import { useState } from 'react'

export const ITEM_TEXT_INPUT_TEST_ID = 'item-text-input'
export const ITEM_SUBMIT_BUTTON_TEST_ID = 'item-submit-button'

export interface GroceryFormProps {
	addItem: (text: string) => Promise<void>
}

function GroceryForm({ addItem }: GroceryFormProps): JSX.Element {
	const [item, setItem] = useState<string>('')

	const onSubmitForm = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault()

		if (item.length) {
			await addItem(item)
			setItem('')
		}
	}

	return (
		<div>
			<form onSubmit={e => void onSubmitForm(e)}>
				<input
					type='text'
					name='item-text'
					id='item-text'
					data-testid={ITEM_TEXT_INPUT_TEST_ID}
					value={item}
					onChange={e => setItem(e.target.value)}
				/>
				<button type='submit' data-testid={ITEM_SUBMIT_BUTTON_TEST_ID}>
					Add
				</button>
			</form>
		</div>
	)
}

export default GroceryForm
