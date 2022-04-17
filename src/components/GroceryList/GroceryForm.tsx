import Button from 'components/ui/baseLibrary/Button'
import Input from 'components/ui/baseLibrary/forms/Input'
import styled from 'components/ui/theme'
import { AnimatePresence, motion } from 'framer-motion'
import type { FormEvent } from 'react'
import { useState } from 'react'
import AddButton from './AddButton'

export const ITEM_TEXT_INPUT_TEST_ID = 'item-text-input'
export const ITEM_SUBMIT_BUTTON_TEST_ID = 'item-submit-button'

export interface GroceryFormProps {
	addItem: (text: string) => Promise<void>
}

const FormContainer = styled('div', {
	borderTop: '1px solid $colors$slate7',
	position: 'relative',
	height: '94px',
})

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
		<FormContainer aria-label='Grocery form'>
			<AnimatePresence>
				{formOpen ? (
					<motion.div
						key='form'
						initial={{ opacity: 0, y: '-10px' }}
						animate={{ opacity: 1, y: '0px' }}
						exit={{ opacity: 0, y: '-10px' }}
						transition={{ duration: 0.1, ease: 'easeInOut' }}
						style={{ position: 'absolute', width: '100%' }}
					>
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
									disabled={!item.length}
									aria-disabled={!item.length}
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
					</motion.div>
				) : (
					<AddButton onClick={onAddClick} />
				)}
			</AnimatePresence>
		</FormContainer>
	)
}

export default GroceryForm
