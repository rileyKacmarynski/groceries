import { globalCss } from '@stitches/react'

const globalStyles = globalCss({
	'*': {
		boxSizing: 'border-box',
		margin: 0
	},
	'*::before': { boxSizing: 'border-box' },
	'*::after': { boxSizing: 'border-box' },
	html: {
		height: '100%'
	},
	body: {
		height: '100%',
		lineHeight: 1.5,
		'-webkit-font-smoothing': 'antialiased'
	},
	img: { display: 'block', maxWidth: '100%' },
	picture: { display: 'block', maxWidth: '100%' },
	video: { display: 'block', maxWidth: '100%' },
	canvas: { display: 'block', maxWidth: '100%' },
	svg: { display: 'block', maxWidth: '100%' },
	input: { font: 'inherit' },
	button: { font: 'inherit' },
	textArea: { font: 'inherit' },
	select: { font: 'inherit' },
	p: { overflowWrap: 'break-word' },
	h1: { overflowWrap: 'break-word' },
	h2: { overflowWrap: 'break-word' },
	h3: { overflowWrap: 'break-word' },
	h4: { overflowWrap: 'break-word' },
	h5: { overflowWrap: 'break-word' },
	h6: { overflowWrap: 'break-word' },
	'#root': { isolation: 'isolate' },
	'#__next': { isolation: 'isolate' }
})

export default globalStyles
