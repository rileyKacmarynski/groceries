import type React from 'react'
import styled, { darkTheme } from '../theme'

const StyledLayout = styled('div', {
	backgroundColor: '$indigo2',
	color: '$indigo12'
})

const Layout: React.FC = ({ children }) => (
	<StyledLayout className={darkTheme}>
		this is my layout
		{children}
	</StyledLayout>
)

export default Layout
