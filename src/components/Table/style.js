import styled from 'styled-components'
import { TableContainer, TableCell, Table } from '@mui/material'

export const DataTableContainer = styled(TableContainer)`
	.cellWrapper {
		display: flex;
		align-items: center;

		.image {
			width: 32px;
			height: 32px;
			border-radius: 50%;
			margin-right: 10px;
			object-fit: cover;
		}
	}
`

export const DataTableTable = styled(Table)`
	background-color: ${({ theme }) => theme.table_backgroundColor};
`

export const DataTableCell = styled(TableCell)`
	color: ${({ theme }) => theme.table_color} !important;

	span {
		padding: 15px;
		border-radius: 5px;

		&.Approved {
			color: green;
			background-color: rgba(0, 128, 0, 0.151);
		}

		&.Pending {
			color: goldenrod;
			background-color: rgba(189, 189, 3, 0.103);
		}
	}
`
