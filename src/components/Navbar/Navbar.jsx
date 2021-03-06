import React, { useState, useEffect } from 'react'
import {
	SearchOutlined,
	LanguageOutlined,
	DarkModeOutlined,
	LightMode,
	FullscreenExitOutlined,
	NotificationAddOutlined,
	ChatBubbleOutlineOutlined,
	ListOutlined,
} from '@mui/icons-material'
import { NavbarContainer, Wrapper, NavbarItems, Search } from './style'
import PubSub from 'pubsub-js'
import { dark, light } from '../../style/theme'

const Navbar = () => {
	const [theme, setTheme] = useState(light)
	useEffect(() => {
		PubSub.subscribe('getTheme', (_, data) => setTheme(data))
		console.log(theme)
		return () => {
			// PubSub.clearAllSubscriptions()
		}
	}, [theme])

	const setThemeFunc = () => {
		console.log(theme === light ? dark : light)
		PubSub.publish('setTheme', theme === light ? dark : light)
	}
	return (
		<NavbarContainer>
			<Wrapper>
				<Search>
					<input type="text" placeholder="Search..." />
					<SearchOutlined />
				</Search>
				<NavbarItems>
					<div>
						<LanguageOutlined />
						English
					</div>
					<div onClick={setThemeFunc}>
						{theme === light ? <DarkModeOutlined /> : <LightMode />}
					</div>
					<div>
						<FullscreenExitOutlined />
					</div>
					<div>
						<NotificationAddOutlined />
						<div>1</div>
					</div>
					<div>
						<ChatBubbleOutlineOutlined />
						<div>2</div>
					</div>
					<div>
						<ListOutlined />
					</div>
					<div>
						<img
							src="	https://avatars.githubusercontent.com/u/56282281?s=40&v=4"
							alt=""
						/>
					</div>
				</NavbarItems>
			</Wrapper>
		</NavbarContainer>
	)
}

export default Navbar
