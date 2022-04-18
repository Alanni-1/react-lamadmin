import React from 'react'
import {
	SearchOutlined,
	LanguageOutlined,
	DarkModeOutlined,
	FullscreenExitOutlined,
	NotificationAddOutlined,
	ChatBubbleOutlineOutlined,
	ListOutlined,
} from '@mui/icons-material'
import { NavbarContainer, Wrapper, NavbarItems, Search } from './style'

const Navbar = () => {
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
					<div>
						<DarkModeOutlined />
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
