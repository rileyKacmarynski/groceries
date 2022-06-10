import type React from 'react'
import Header from '../Header'
import styled, { darkTheme } from '../theme'

const StyledLayout = styled('div', {
	height: '100vh',
	backgroundColor: '$slate1',
	color: '$slate12',
	display: 'flex',
	flexDirection: 'column',
	overflow: 'hidden',
})

const Content = styled('div', {
	flexGrow: 1,
	display: 'flex',
	flexDirection: 'column',
	overflow: 'hidden',
})

const Main = styled('main', {
	px: '$space$9',
	marginTop: 'calc($space$6 + $space$8)',
	paddingBottom: '$space$6',
	flexGrow: 1,
	position: 'relative',
	overflow: 'hidden auto',
	display: 'flex',
	flexDirection: 'column',
})

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<StyledLayout className={darkTheme}>
		<Header />
		<Content>
			<Main>{children}</Main>
		</Content>
	</StyledLayout>
)

export default Layout
