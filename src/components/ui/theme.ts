import {
	green,
	greenDark,
	indigo,
	indigoDark,
	red,
	redDark,
	slate,
	slateDark,
	violetDark,
	yellow,
	yellowDark,
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

const primaryColor = 'indigo'
const { styled, createTheme } = createStitches({
	theme: {
		colors: {
			...slate,
			...indigo,
			...green,
			...red,
			...yellow,

			// semantic tokens
			accentBackground: `$${primaryColor}9`,
			textLight: '$slate1',
			textDark: '$slate12',
			primaryElementBackground: `$${primaryColor}5`,
			primaryElementHover: `$${primaryColor}6`,
			primaryElementActive: `$${primaryColor}7`,
			primarySubtleBorder: `$${primaryColor}8`,
			primaryUiElementBorder: `$${primaryColor}9`,
			primaryUiElementHover: `$${primaryColor}9`,
			primaryHoverBackground: `$${primaryColor}10`,
		},
		space: {
			1: '0.25rem',
			2: '0.5rem',
			3: '1rem',
			4: '1.5rem',
			5: '2rem',
			6: '3rem',
			7: '4rem',
			8: '6rem',
			9: '8rem',
			10: '10rem',
		},
		fontSizes: {
			1: '0.75rem',
			2: '1rem',
			3: '1.25rem',
			4: '1.5rem',
			5: '2rem',
			6: '2.5rem',
			7: '3rem',
			8: '4rem',
			9: '5rem',
			10: '6rem',
		},
		fontWeights: {
			light: 300,
			normal: 400,
			bold: 700,
		},
		radii: {
			1: '0.125rem',
			2: '0.25rem',
			3: '.5rem',
			4: '1rem',
			5: '1.5rem',
			6: '2rem',
			7: '2.5rem',
			8: '100vw',
		},
	},
	utils: {
		mx: (value: number | string) => ({
			marginLeft: value,
			marginRight: value,
		}),
		px: (value: number | string) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		size: (value: number | string) => ({
			width: value,
			height: value,
		}),
	},
})

export const darkTheme = createTheme({
	colors: {
		...slateDark,
		...indigoDark,
		...greenDark,
		...redDark,
		...yellowDark,
		...violetDark,

		// semantic tokens
		accentBackground: '$slate1',
		textLight: '$slate12',
		textDark: '$slate1',
		primaryElementBackground: `$${primaryColor}4`,
		primaryElementHover: `$${primaryColor}5`,
		primaryElementActive: `$${primaryColor}6`,
		primarySubtleBorder: `$${primaryColor}7`,
		primaryUiElementBorder: `$${primaryColor}8`,
		primaryUiElementHover: `$${primaryColor}8`,
		primaryHoverBackground: `$${primaryColor}9`,
	},
})

export default styled
