import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DataTableContainer = styled.div`
	height: 650px;

	.cellWithImg {
		display: flex;
		align-items: center;

		.cellImg {
			width: 32px;
			height: 32px;
			border-radius: 50%;
			object-fit: cover;
			margin-right: 20px;
		}
	}

	.cellWithStatus {
		padding: 5px;
		border-radius: 5px;

		&.active {
			background-color: rgba(0, 128, 0, 0.05);
			color: green;
		}

		&.pending {
			background-color: rgba(255, 217, 0, 0.05);
			color: goldenrod;
		}

		&.passive {
			background-color: rgba(255, 0, 0, 0.05);
			color: crimson;
		}
	}

	.cellAction {
		display: flex;
		align-items: center;
		gap: 15px;

		.viewButton {
			padding: 2px 5px;
			border-radius: 5px;
			color: darkblue;
			border: 1px dotted darkblue;
			cursor: pointer;
		}

		.deleteButton {
			padding: 2px 5px;
			border-radius: 5px;
			color: crimson;
			border: 1px dotted rgba(220, 20, 60, 0.6);
			cursor: pointer;
		}
	}
`
export const DataTableLink = styled(Link)`
	text-decoration: none;
`

export const DatatbleTitle = styled.div`
	width: 100%;
	font-style: 24px;
	color: gray;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		color: green;
		font-style: 16px;
		font-weight: 400;
		border: 1px solid green;
		padding: 5px;
		border-radius: 5px;
		cursor: pointer;
	}
`
