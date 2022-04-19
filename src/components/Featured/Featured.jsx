import React from 'react'
import {
	FeaturedBotton,
	FeaturedChart,
	FeaturedContainer,
	FeaturedTop,
  ItemResult,
} from './style'
import { KeyboardArrowDown, KeyboardArrowUpOutlined, MoreVert } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Featured = () => {
	return (
		<FeaturedContainer>
			<FeaturedTop>
				<h1>Total Revenue</h1>
				<MoreVert fontSize="small" />
			</FeaturedTop>
			<FeaturedBotton>
				<FeaturedChart>
					<CircularProgressbar
						value={70}
						text={'70%'}
						strokeWidth={5}
					/>
				</FeaturedChart>
				<p>Total sales made today</p>
				<p>$420</p>
				<p>
					Previous transactions processing. Last payments may not be
					included.
				</p>
				<div className="summary">
					<div className="item">
						<div className="itemTitle">Target</div>
						<ItemResult positive>
							<KeyboardArrowUpOutlined fontSize="small" />
							<div className="resultAmount">$12.4k</div>
						</ItemResult>
					</div>
					<div className="item">
						<div className="itemTitle">Last Week</div>
						<ItemResult negative>
							<KeyboardArrowDown fontSize="small" />
							<div className="resultAmount">$12.4k</div>
						</ItemResult>
					</div>
					<div className="item">
						<div className="itemTitle">Last Month</div>
						<ItemResult negative>
							<KeyboardArrowDown fontSize="small" />
							<div className="resultAmount">$12.4k</div>
						</ItemResult>
					</div>
				</div>
			</FeaturedBotton>
		</FeaturedContainer>
	)
}

export default Featured
