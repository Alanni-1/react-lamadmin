import React from 'react'
import {
	ButColor,
	SidebarContainer,
	SidebarLogo,
	SidebarNav,
	SwitchColor,
	SidebarLink,
} from './style'
import sidebarData from './data'

const Sidebar = () => {
	return (
		<SidebarContainer>
			<SidebarLogo to='/'>
				<span className="logo">lamadmin</span>
			</SidebarLogo>
			<SidebarNav>
				<ul>
					{sidebarData.map((item) =>
						item?.icon ? (
							<SidebarLink to={item.to} key={item.title}>
								{item.icon}
								<span>{item.title}</span>
							</SidebarLink>
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
