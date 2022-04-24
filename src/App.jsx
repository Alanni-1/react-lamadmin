import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style/GlobalStyle'
import RouteContainer from './route'
import { light } from './style/theme'
import PubSub from 'pubsub-js'

function App() {
	const [theme, setTheme] = useState(light)
	PubSub.subscribe('setTheme', (_, data) => setTheme(data))
	PubSub.publish('getTheme', theme)
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RouteContainer />
		</ThemeProvider>
	)
}

export default App
