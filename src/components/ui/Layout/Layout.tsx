import type React from 'react'
import Header from '../Header'
import styled, { darkTheme } from '../theme'

const Main = styled('main', {
	paddingTop: '$space$8',
	// px: '$space$6',
})

const Content = styled('div', {
	padding: '$space$6',
})

const StyledLayout = styled('div', {
	minHeight: '100vh',
	backgroundColor: '$slate1',
	color: '$slate12',
})

const Layout: React.FC = ({ children }) => (
	<StyledLayout className={darkTheme}>
		<Header />
		<Content>
			<Main>{children}</Main>
		</Content>
	</StyledLayout>
)

export default Layout
