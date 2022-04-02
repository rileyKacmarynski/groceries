import {
	green,
	greenDark,
	indigo,
	indigoDark,
	red,
	redDark,
	slate,
	slateDark,
	yellow,
	yellowDark
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

const { styled, createTheme } = createStitches({
	theme: {
		colors: {
			...slate,
			...indigo,
			...green,
			...red,
			...yellow
		}
	}
})

export const darkTheme = createTheme({
	colors: {
		...slateDark,
		...indigoDark,
		...greenDark,
		...redDark,
		...yellowDark
	}
})

export default styled
