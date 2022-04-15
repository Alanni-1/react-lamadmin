import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style/GlobalStyle'
import RouteContainer from './route'
import theme from './style/theme'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RouteContainer />
		</ThemeProvider>
	)
}

export default App
