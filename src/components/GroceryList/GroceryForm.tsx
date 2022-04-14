import Button from 'components/ui/baseLibrary/Button'
import Input from 'components/ui/baseLibrary/forms/Input'
import styled from 'components/ui/theme'
import type { FormEvent } from 'react'
import { useState } from 'react'
import AddButton from './AddButton'

export const ITEM_TEXT_INPUT_TEST_ID = 'item-text-input'
export const ITEM_SUBMIT_BUTTON_TEST_ID = 'item-submit-button'

export interface GroceryFormProps {
	addItem: (text: string) => Promise<void>
}

const Form = styled('form', {
	marginTop: '$space$3',
	maxWidth: '240px',
})

const ButtonGroup = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginTop: '$space$3',
})

function GroceryForm({ addItem }: GroceryFormProps): JSX.Element {
	const [formOpen, setFormOpen] = useState(false)
	const [item, setItem] = useState<string>('')

	const onSubmitForm = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault()

		if (item.length) {
			await addItem(item)
			setFormOpen(false)
			setItem('')
		}
	}

	const onAddClick = () => {
		setFormOpen(true)
	}

	const onCloseClick = () => {
		setFormOpen(false)
		setItem('')
	}

	return (
		<div>
			{formOpen ? (
				<Form onSubmit={e => void onSubmitForm(e)}>
					<Input
						type='text'
						css={{ width: '100%' }}
						name='item-text'
						id='item-text'
						data-testid={ITEM_TEXT_INPUT_TEST_ID}
						value={item}
						onChange={e => setItem(e.target.value)}
					/>
					<ButtonGroup>
						<Button
							type='submit'
							outlined
							data-testid={ITEM_SUBMIT_BUTTON_TEST_ID}
						>
							Add Item
						</Button>
						<Button outlined variant='red' onClick={onCloseClick}>
							Close
						</Button>
					</ButtonGroup>
				</Form>
			) : (
				<AddButton onClick={onAddClick} />
			)}
		</div>
	)
}

export default GroceryForm
