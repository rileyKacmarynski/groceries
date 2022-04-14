import type Stitches from '@stitches/react'
import styled from '../../theme'

interface SvgIconProps {
	size?: 'large' | 'medium' | 'small'
	fill?: string
	css?: Stitches.CSS
}

const StyledSvg = styled('svg', {})

const SvgIcon: React.FC<SvgIconProps> = ({
	children,
	size = 'small',
	fill = 'none',
	css,
}) => {
	let svgSize
	switch (size) {
		case 'large':
			svgSize = 25
			break
		case 'medium':
			svgSize = 20
			break
		case 'small':
			svgSize = 15
			break
		default:
			throw new Error('Invalid size')
	}

	return (
		<StyledSvg
			width={svgSize}
			height={svgSize}
			viewBox='0 0 15 15'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			css={css}
		>
			{children}
		</StyledSvg>
	)
}

export default SvgIcon
