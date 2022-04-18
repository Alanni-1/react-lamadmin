import React from 'react'
import {
	ButColor,
	SidebarContainer,
	SidebarLogo,
	SidebarNav,
	SwitchColor,
} from './style'
import sidebarData from './data'

const Sidebar = () => {
	return (
		<SidebarContainer>
			<SidebarLogo>
				<span className="logo">lamadmin</span>
			</SidebarLogo>
			<SidebarNav>
				<ul>
					{sidebarData.map((item) =>
						item?.icon ? (
							<li key={item.title}>
								{item.icon}
								<span>{item.title}</span>
							</li>
						) : (
							<p key={item.title}>{item.title}</p>
						)
					)}
				</ul>
			</SidebarNav>
			<SwitchColor>
				<ButColor color="whitesmoke" />
				<ButColor color="#333" />
			</SwitchColor>
		</SidebarContainer>
	)
}

export default Sidebar
