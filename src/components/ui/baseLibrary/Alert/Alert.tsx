import { Cross1Icon } from '@radix-ui/react-icons'
import Button from 'components/ui/baseLibrary/Button'
import {
	Toast,
	ToastAction,
	ToastClose,
	ToastTitle,
} from 'components/ui/baseLibrary/Toast'
import { useState } from 'react'

export interface AlertProps {
	title: string
	removeAlert: () => void
	description?: string
	actionText?: string
	action?: {
		actionText: string
		altActionText: string
		actionFn: React.MouseEventHandler<HTMLButtonElement>
	}
}

const Alert: React.FC<AlertProps> = ({
	title,
	description,
	action,
	removeAlert,
}) => {
	const [isOpen, setIsOpen] = useState(true)

	const onRemove = (open: boolean) => {
		removeAlert()
		setIsOpen(open)
	}

	return (
		<Toast open onOpenChange={onRemove}>
			<ToastTitle>{title}</ToastTitle>
			{/* <ToastDescription>{description}</ToastDescription> */}
			{action && (
				<ToastAction asChild altText={action.altActionText}>
					<Button
						css={{
							marginRight: '15px',
							height: '$space$6',
							backgroundColor: '$colors$whiteA5',
							color: '$colors$slate1',
							fontWeight: 700,

							'&:hover': {
								backgroundColor: '$colors$whiteA6',
							},
							'&:active': {
								backgroundColor: '$colors$slate7',
							},
						}}
						onClick={action.actionFn}
						variant='hoverOnly'
					>
						{action.actionText}
					</Button>
				</ToastAction>
			)}
			<ToastClose aria-label='close' asChild>
				<Button
					css={{
						gridArea: 'close',
						justifySelf: 'end',
						color: '$slate10',
						padding: '0.175rem',
						height: '$space$4',
					}}
					variant='hoverOnly'
				>
					<Cross1Icon />
				</Button>
			</ToastClose>
		</Toast>
	)
}

export default Alert
