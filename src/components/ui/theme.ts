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
	whiteA,
	yellow,
	yellowDark,
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

const primaryColor = 'indigo'
const primaryColors = {
	primary1: `$${primaryColor}1`,
	primary2: `$${primaryColor}2`,
	primary3: `$${primaryColor}3`,
	primary4: `$${primaryColor}4`,
	primary5: `$${primaryColor}5`,
	primary6: `$${primaryColor}6`,
	primary7: `$${primaryColor}7`,
	primary8: `$${primaryColor}8`,
	primary9: `$${primaryColor}9`,
	primary10: `$${primaryColor}10`,
	primary11: `$${primaryColor}11`,
	primary12: `$${primaryColor}12`,
}
const { styled, createTheme } = createStitches({
	theme: {
		colors: {
			...whiteA,
			...slate,
			...indigo,
			...green,
			...red,
			...yellow,

			// semantic tokens
			accentBackground: `$${primaryColor}9`,
			textLight: '$slate1',
			textDark: '$slate12',
			...primaryColors,
		},
		space: {
			1: '0.25rem',
			2: '0.5rem',
			3: '1rem',
			4: '1.15rem',
			5: '1.5rem',
			6: '1.75rem',
			7: '2rem',
			8: '2.5rem',
			9: '3rem',
			10: '4rem',
			11: '6rem',
			12: '8rem',
			13: '10rem',
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
		my: (value: number | string) => ({
			marginTop: value,
			marginBottom: value,
		}),
		px: (value: number | string) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		py: (value: number | string) => ({
			paddingTop: value,
			paddingBottom: value,
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
		accentBackground: '$slate4',
		textLight: '$slate12',
		textDark: '$slate1',
		...primaryColors,
	},
})

export default styled
