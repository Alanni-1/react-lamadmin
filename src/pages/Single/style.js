import styled from 'styled-components'
import { Charts } from '../../style'

export const SingleCharts = styled(Charts)``

export const UserFeatured = styled.div.attrs({
	className: 'box_shadow'
})`
	flex: 2;
	padding: 20px;
	position: relative;

	.editButton {
		position: absolute;
		top: 0;
		right: 0;
		padding: 5px;
		font-size: 12px;
		color: #7451f8;
		background-color: #7551f818;
		cursor: pointer;
		border-radius: 0 0 0 5px;
	}

	.item {
		display: flex;
		gap: 20px;

		.itemImg {
			width: 100px;
			height: 100px;
			border-radius: 50%;
			object-fit: cover;
		}

		.details {
			.itemTitle {
				margin-bottom: 10px;
			}

			.detailItem {
				margin-bottom: 10px;
				font-style: 14px;

				.itemKey {
					font-weight: bold;
					color: gray;
					margin-right: 5px;
				}

				.itemValue {
					font-weight: 300;
				}
			}
		}
	}
`

export const Title = styled.h1`
	font-size: 16px;
	color: lightgray;
	margin-bottom: 20px;
`

export const SingleList = styled.div.attrs({
	className: 'box_shadow'
})`
	margin-bottom: 20px;
	padding: 20px;
`
