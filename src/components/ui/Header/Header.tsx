import type React from 'react'
import styled from '../theme'
import MenuButton from './MenuButton'

const StyledHeader = styled('header', {
	position: 'fixed',
	zIndex: 2,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	top: 0,
	left: 0,
	width: '100%',
	height: '$space$8',
	backgroundColor: '$accentBackground',
	// boxShadow: '0 0 0 1px $colors$slate6',
	color: 'inherit',
	'& > div': {
		px: '$space$4',
	},
})

const Header: React.FC = () => (
	<StyledHeader>
		<div>
			<MenuButton />
		</div>
	</StyledHeader>
)

export default Header
