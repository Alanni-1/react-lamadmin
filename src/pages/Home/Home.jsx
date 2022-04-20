import React from 'react'
import { HomeWidgets, HomeCharts, ListContainer } from './style'
import Widget from '../../components/Widget/Widget'
import Featured from '../../components/Featured/Featured'
import Chart from '../../components/Chart/Chart'
import Table from '../../components/Table/Table'
import Container from '../../components/Container/Container'

const Home = () => {
	return (
		<Container>
			{/* 窗口小部件 */}
			<HomeWidgets>
				<Widget type="user" />
				<Widget type="order" />
				<Widget type="erarning" />
				<Widget type="balance" />
			</HomeWidgets>
			{/* 图表插件 */}
			<HomeCharts>
				<Featured />
				<Chart />
			</HomeCharts>
			{/*  */}
			<ListContainer>
				<div className="title">Latest Transactions</div>
				<Table />
			</ListContainer>
		</Container>
	)
}

export default Home
