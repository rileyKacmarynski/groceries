import Input from 'components/ui/baseLibrary/forms/Input'
import styled from 'components/ui/theme'
import { AnimatePresence } from 'framer-motion'
import type { FormEvent } from 'react'
import { useState } from 'react'
import AddButton from './AddButton'

export const ITEM_TEXT_INPUT_TEST_ID = 'item-text-input'
export const ITEM_SUBMIT_BUTTON_TEST_ID = 'item-submit-button'

export interface GroceryFormProps {
	addItem: (text: string) => Promise<void>
}

const Form = styled('form', {
	// maxWidth: '240px',
	display: 'flex',
	alignItems: 'center',
})

const TextInput = styled(Input, {
	maxWidth: '200px',
	backgroundColor: '$slate2',
	boxShadow: 'none',
	// set this to only be border top
	borderRadius: '0',
	borderTopLeftRadius: '$radii$2',
	borderTopRightRadius: '$radii$2',
	borderBottom: '2px solid $colors$slate7',
	transition: 'all 0.1s ease-in-out',

	'&:focus, &:active': {
		$$currentColor: '$colors$primary6',

		backgroundColor: '$slate4',
		outline: 'none',
		boxShadow: 'none',
		borderBottom: '2px solid $$currentColor',
	},
})

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
		<section aria-label='Grocery form'>
			<AnimatePresence>
				<Form onSubmit={onSubmitForm}>
					<TextInput
						type='text'
						css={{ marginLeft: 'x$6', marginRight: '$2' }}
						name='item-text'
						id='item-text'
						data-testid={ITEM_TEXT_INPUT_TEST_ID}
						value={item}
						onChange={e => setItem(e.target.value)}
					/>
					<AddButton
						data-testid={ITEM_SUBMIT_BUTTON_TEST_ID}
						type='submit'
						disabled={!item.length}
					/>
				</Form>
			</AnimatePresence>
		</section>
	)
}

export default GroceryForm
