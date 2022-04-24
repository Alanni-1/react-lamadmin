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
import PubSub from 'pubsub-js'
import { dark, light } from '../../style/theme'


const Sidebar = () => {
	const setTheme = (data) => {
		return () => {
			PubSub.publish('setTheme', data)
		}
	}
	return (
		<SidebarContainer>
			<SidebarLogo to="/">
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
				<ButColor color="whitesmoke" onClick={setTheme(light)} />
				<ButColor color="#333" onClick={setTheme(dark)} />
			</SwitchColor>
		</SidebarContainer>
	)
}

export default Sidebar
