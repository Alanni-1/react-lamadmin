import React from 'react'
import { SingleCharts, SingleList, UserFeatured, Title } from './style'
import Container from '../../components/Container/Container'
import Chart from '../../components/Chart/Chart'
import Table from '../../components/Table/Table'

const Single = () => {
	return (
		<Container>
			<SingleCharts>
				<UserFeatured>
					<div className="editButton">Edit</div>
					<Title>Information</Title>
					<div className="item">
						<img
							src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
							alt="images"
							className="itemImg"
						/>
						<div className="details">
							<h1 className="itemTitle">Jane Doe</h1>
							<div className="detailItem">
								<span className="itemKey">Email:</span>
								<span className="itemValue">
									janedoe@gmail.com
								</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Phone:</span>
								<span className="itemValue">+1 2345 67 89</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Address:</span>
								<span className="itemValue">
									Elton St. 234 Garden Yd. NewYork
								</span>
							</div>
							<div className="detailItem">
								<span className="itemKey">Country:</span>
								<span className="itemValue">USA</span>
							</div>
						</div>
					</div>
				</UserFeatured>
				<Chart
					aspect={4 / 1}
					title="Users Spending ( Last 6 Months )"
				/>
			</SingleCharts>
			<SingleList>
				<Title>Last Transactions</Title>
				<Table />
			</SingleList>
		</Container>
	)
}

export default Single
