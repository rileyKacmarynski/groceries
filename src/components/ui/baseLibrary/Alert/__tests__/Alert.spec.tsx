import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { AlertOptions } from '../alertContext'
import AlertProvider, { useAlert } from '../alertContext'

const AlertTester = (propOverrides?: Partial<AlertOptions>) => {
	const { alert } = useAlert()

	const onClick = () => {
		const options = propOverrides ?? {}

		const {
			title = 'title',
			description = 'description of the alert',
			action = {
				actionFn: vi.fn(),
				actionText: 'Action',
				altActionText: 'Alt',
			},
		} = options

		alert({ title, description, action })
	}

	return (
		<button type='button' onClick={onClick}>
			Create Alert
		</button>
	)
}

describe('<Alert />', () => {
	const customRender = (props?: Partial<AlertOptions>) => {
		render(
			<AlertProvider>
				<AlertTester {...props} />
			</AlertProvider>,
		)
	}

	const createAlert = async () => {
		const button = screen.getByRole('button')
		await userEvent.click(button)
	}

	it('shows an alert when the alert method is called', async () => {
		customRender()
		createAlert()

		expect(await screen.findByText(/title/i)).toBeInTheDocument()
	})

	it('allows you to add multiple alerts', () => {
		expect(false).toBeTruthy()
	})

	it('calls the supplied action function', () => {
		expect(false).toBeTruthy()
	})

	it('closes when the close button is clicked', () => {
		expect(false).toBeTruthy()
	})
})
