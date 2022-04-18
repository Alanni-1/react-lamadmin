import React from 'react'

import {
	HomeContainer,
	HomeLeft,
	HomeRight,
	HomeWidgets,
	HomeCharts,
} from './style'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/Widget/Widget'
import Featured from '../../components/Featured/Featured'
import Chart from '../../components/Chart/Chart'

const Home = () => {
	return (
		<HomeContainer>
			{/* 布局占用一份 */}
			<HomeLeft>
				{/* 侧边栏 */}
				<Sidebar />
			</HomeLeft>
			{/* 布局占用六份 */}
			<HomeRight>
				{/* 顶部导航栏 */}
				<Navbar />
				{/* 内容展示区域 */}
				<HomeWidgets>
					<Widget type="user" />
					<Widget type="order" />
					<Widget type="erarning" />
					<Widget type="balance" />
				</HomeWidgets>
				<HomeCharts>
					<Featured />
					<Chart />
				</HomeCharts>
			</HomeRight>
		</HomeContainer>
	)
}

export default Home
