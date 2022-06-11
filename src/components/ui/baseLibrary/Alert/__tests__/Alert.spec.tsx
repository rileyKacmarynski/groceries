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
		const button = screen.getByText(/create alert/i)
		await userEvent.click(button)
	}

	it('shows an alert when the alert method is called', async () => {
		customRender()
		await createAlert()

		expect(await screen.findByText(/title/i)).toBeInTheDocument()
	})

	it('allows you to add multiple alerts', async () => {
		customRender()
		await createAlert()
		await createAlert()

		expect(screen.getAllByText(/title/i)).toHaveLength(2)
	})

	it('calls the supplied action function', async () => {
		const actionFn = vi.fn()
		const actionText = 'Action'
		customRender({
			action: {
				actionFn,
				actionText,
				altActionText: 'Alt',
			},
		})
		await createAlert()

		await userEvent.click(screen.getByText(/action/i))

		expect(actionFn).toHaveBeenCalled()
	})

	it('closes when the close button is clicked', async () => {
		customRender()
		await createAlert()

		await userEvent.click(screen.getByLabelText(/close/i))

		expect(screen.queryByText(/title/i)).not.toBeInTheDocument()
	})
})
