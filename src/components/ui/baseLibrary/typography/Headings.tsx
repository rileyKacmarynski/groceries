import styled from 'components/ui/theme'

const colorVariants = {
	color: {
		light: {
			color: '$textLight',
		},
		dark: {
			color: '$textDark',
		},
	},
}

export const H1 = styled('h1', {
	fontSize: '$5',
	// fontWeight: '$normal',
	color: 'inherit',

	variants: {
		...colorVariants,
	},
})

export const H2 = styled('h2', {
	color: 'inherit',

	variants: {
		...colorVariants,
	},
})

export const H3 = styled('h3', {
	color: 'inherit',

	variants: {
		...colorVariants,
	},
})

export const H4 = styled('h4', {
	color: 'inherit',

	variants: {
		...colorVariants,
	},
})
