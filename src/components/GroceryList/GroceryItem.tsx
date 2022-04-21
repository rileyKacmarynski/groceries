import { styled } from '@stitches/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

interface GroceryItemProps {
	text: string
	isDragging: boolean
	remove: () => Promise<void>
}

const Li = styled('li', {
	borderRadius: '$2',
	display: 'flex',
	alignItems: 'center',
	// eventually we'll make these items draggable
	transition: 'all .15s ease-in-out',
	transitionDelay: '.1s',

	'&:hover': {
		// cursor: 'grab',
		// backgroundColor: '$whiteA4',
	},
	'&:active': {
		// cursor: 'grabbing',
		// backgroundColor: '$whiteA4',
	},
})

const MarkCompleteButton = styled('button', {
	display: 'inline-block',
	cursor: 'pointer',
	appearance: 'none',
	border: 'none',
	backgroundColor: 'transparent',

	marginRight: '$2',

	'& .circle': {
		$$size: '$fontSizes$2',

		height: '$$size',
		width: '$$size',
		boxShadow: '0 0 0 1px $colors$slate7',
		borderRadius: '100vw',
		transition: 'all .15s ease-in-out',
	},

	'& svg': {
		width: '100%',
		height: '100%',
		viewBox: '0 0 15 15',
		color: '$colors$slate8',
		opacity: 0,
		transition: 'all .15s ease-in-out',
	},

	'&:hover > .circle': {
		boxShadow: '0 0 0 1px $colors$slate8',
	},
	'&:hover svg': {
		opacity: 1,
	},
})

const GroceryItem: React.FC<GroceryItemProps> = ({
	text,
	remove,
	isDragging,
}) => {
	const [clicked, setClicked] = useState(false)

	const onButtonClick = async () => {
		setClicked(true)
		await remove()
	}

	return (
		<motion.div
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.1, delay: 0.2 }}
		>
			<Li
				css={
					isDragging
						? {
								boxShadow: '4px 5px 34px 3px rgba(0,0,0,0.2)',
								backgroundColor: '$slate2',
						  }
						: {}
				}
			>
				<MarkCompleteButton
					role='checkbox'
					aria-checked='false'
					aria-label='Cross off grocery item'
					aria-describedby='groceryitem[i]'
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					onClick={onButtonClick}
				>
					<div className='circle'>
						<svg>
							<AnimatePresence>
								<path
									d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z'
									fill='currentColor'
									fillRule='evenodd'
									clipRule='evenodd'
								/>
								{clicked && (
									<motion.circle
										animate={{ opacity: 1, scale: 1 }}
										initial={{ opacity: 0, scale: 0 }}
										transition={{ duration: 0.1 }}
										cx='8'
										cy='8'
										r='7.5'
										fill='rgba(255, 255, 255, 0.25)'
									/>
								)}
							</AnimatePresence>
						</svg>
					</div>
				</MarkCompleteButton>
				{text}
			</Li>
		</motion.div>
	)
}

export default GroceryItem
