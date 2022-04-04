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
	textTransform: 'uppercase',
	letterSpacing: '1.75px',
	fontWeight: '$fontWeights$bold',
	transition: 'all 0.15s ease-in-out',
	color: '$slate12',

	variants: {
		size: {
			1: {
				fontSize: '$1',
				height: '$space$4',
				px: '$space$2',
			},
			2: {
				fontSize: '$2',
				height: '$space$5',
				px: '$space$3',
			},
			3: {
				fontSize: '$3',
				height: '$space$6',
				px: '$space$4',
			},
		},
		variant: {
			primary: {
				backgroundColor: '$colors$primaryElementBackground',
				'&:hover': {
					cursor: 'pointer',
					backgroundColor: '$colors$primaryElementHover',
				},
				'&:active': {
					backgroundColor: '$colors$primaryElementActive',
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
		},
		outlined: {
			true: {
				backgroundColor: 'transparent',
				$$shadowColor: 'transparent',
				boxShadow: '0 0 0 2px $$shadowColor',
			},
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 2,
	},
	compoundVariants: [
		{
			variant: 'primary',
			outlined: true,
			css: {
				$$shadowColor: '$colors$primaryElementHover',
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
