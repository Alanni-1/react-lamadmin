import React from 'react'
import { DataTableContainer, DataTableLink, DatatbleTitle } from './style'
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
					<DataTableLink to='/users/test'>
						<div className="viewButton">View</div>
					</DataTableLink>
					<div className="deleteButton">Delete</div>
				</div>
			),
		},
	]

	return (
		<DataTableContainer>
			<DatatbleTitle>
				Add New Users
				<DataTableLink to='/users/new'>
					Add New 
				</DataTableLink>
			</DatatbleTitle>
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
