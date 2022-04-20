import React from 'react'
import { Container, Left, Right, Main } from '../../style'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const Body = (props) => {
	return (
		<Container>
			{/* 布局占用一份 */}
			<Left>
				{/* 侧边栏 */}
				<Sidebar />
			</Left>
			{/* 布局占用六份 */}
			<Right>
				{/* 顶部导航栏 */}
				<Navbar />
				{/* 内容展示区域 */}
				<Main>{props.children}</Main>
			</Right>
		</Container>
	)
}

export default Body
