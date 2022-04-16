import styled from 'components/ui/theme'

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
// 	size?: 'large' | 'medium' | 'small'
// 	outline?: boolean
// 	onClick?: () => void
// 	css?: Stitches.CSS
// }

const Button = styled('button', {
	display: 'inline-block',
	cursor: 'pointer',
	appearance: 'none',
	border: 'none',
	backgroundColor: 'transparent',

	fontSize: '$2',
	lineHeight: 1,
	height: '$space$5',
	borderRadius: '$radii$2',
	alignItems: 'center',
	fontWeight: '$fontWeights$bold',
	transition: 'all 0.15s ease-in-out',
	color: '$slate12',

	'&:focus': {
		outline: 'solid 2px $colors$primary6',
	},

	'&[aria-disabled="true"]': {
		opacity: '0.4',
		'&:hover': {
			backgroundColor: 'transparent',
			cursor: 'not-allowed',
		},
	},

	variants: {
		size: {
			1: {
				fontSize: '.875rem',
				height: '$space$7',
				px: '10px',
			},
			2: {
				fontSize: '$2',
				height: '$space$8',
				px: '$space$3',
			},
			3: {
				fontSize: '$2',
				height: '$space$8',
				px: '$space$3',
			},
			4: {
				fontSize: '$3',
				height: '$space$9',
				px: '$space$4',
			},
		},
		variant: {
			primary: {
				backgroundColor: '$colors$primary4',
				'&:hover': {
					cursor: 'pointer',
					backgroundColor: '$colors$primary5',
				},
				'&:active': {
					backgroundColor: '$colors$primary6',
				},
			},
			secondary: {
				backgroundColor: '$colors$slate4',
				'&:hover': {
					backgroundColor: '$colors$slate5',
				},
				'&:active': {
					backgroundColor: '$colors$slate6',
				},
			},
			red: {
				backgroundColor: '$colors$red5',
				'&:hover': {
					backgroundColor: '$colors$red6',
				},
				'&:active': {
					backgroundColor: '$colors$red7',
				},
			},
			yellow: {
				backgroundColor: '$colors$yellow6',
				'&:hover': {
					backgroundColor: '$colors$yellow7',
				},
				'&:active': {
					backgroundColor: '$colors$yellow8',
				},
			},
			green: {
				backgroundColor: '$colors$green6',
				'&:hover': {
					backgroundColor: '$colors$green7',
				},
				'&:active': {
					backgroundColor: '$colors$green8',
				},
			},
			hoverOnly: {
				backgroundColor: 'transparent',
				'&:hover': {
					backgroundColor: '$colors$whiteA4',
				},
				'&:active': {
					backgroundColor: '$colors$whiteA6',
				},
			},
		},
		outlined: {
			true: {
				backgroundColor: 'transparent',
				$$shadowColor: 'transparent',
				boxShadow: '0 0 0 2px $$shadowColor',
			},
		},
		hoverOnly: {
			true: {
				backgroundColor: 'transparent',

				'&:hover': {
					// color: '$colors$primary11',
					backgroundColor: '$whiteA4',
				},
			},
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 1,
	},
	compoundVariants: [
		{
			variant: 'primary',
			outlined: true,
			css: {
				$$shadowColor: '$colors$primary5',
				backgroundColor: 'transparent',
			},
		},
		{
			variant: 'red',
			outlined: true,
			css: {
				$$shadowColor: '$colors$red6',
				backgroundColor: 'transparent',
			},
		},
		{
			variant: 'yellow',
			outlined: true,
			css: {
				$$shadowColor: '$colors$yellow7',
				backgroundColor: 'transparent',
			},
		},
		{
			variant: 'green',
			outlined: true,
			css: {
				$$shadowColor: '$colors$green7',
				backgroundColor: 'transparent',
			},
		},
	],
})

// const Button: React.FC<ButtonProps> = props => {
// 	const { children, size, outline, ...rest } = props

// 	return (
// 		<StyledButton color='red' {...rest}>
// 			{children}
// 		</StyledButton>
// 	)
// }

export default Button
