import styled from 'components/ui/theme'

const Input = styled('input', {
	// reset
	appearance: 'none',
	borderWidth: '0',
	fontFamily: 'inherit',
	outline: 'none currentColor medium',
	margin: '0px',
	padding: '0px',

	borderRadius: '$radii$2',
	height: '$space$6',
	fontSize: '$2',
	px: '$space$1',
	lineHeight: '1.5',

	backgroundColor: '$slate1',
	color: '$slate12',
	boxShadow: 'inset 0 0 0 1px $colors$slate7',

	'&:focus': {
		$$currentColor: '$colors$primary6',

		boxShadow: `
			inset 0 0 0 1px $$currentColor,
			0 0 0 1px	$$currentColor
		`,
	},
})

export default Input
