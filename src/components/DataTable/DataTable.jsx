import React from 'react'
import { DataTableContainer } from './style'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns, userRows } from './data'
const DataTable = () => {
	const actionColumn = [
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: () => (
				<div className="cellAction">
					<div className="viewButton">View</div>
					<div className="deleteButton">Delete</div>
				</div>
			),
		},
	]

	return (
		<DataTableContainer>
			<DataGrid
				rows={userRows}
				columns={userColumns.concat(actionColumn)}
				pageSize={10}
				rowsPerPageOptions={[10]}
				checkboxSelection
			/>
		</DataTableContainer>
	)
}

export default DataTable
