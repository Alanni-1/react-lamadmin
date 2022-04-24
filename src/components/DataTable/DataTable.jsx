import React, { useState } from 'react'
import {
	DataTableContainer,
	DataTableLink,
	DatatbleTitle,
	DatableDataGrid,
} from './style'
import { userColumns, userRows } from './data'
const DataTable = () => {
	const [data, setData] = useState(userRows)

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id))
	}

	const actionColumn = [
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: (props) => (
				<div className="cellAction">
					<DataTableLink to="/users/test">
						<div className="viewButton">View</div>
					</DataTableLink>
					<div
						className="deleteButton"
						onClick={() => handleDelete(props.row.id)}
					>
						Delete
					</div>
				</div>
			),
		},
	]

	return (
		<DataTableContainer>
			<DatatbleTitle>
				Add New Users
				<DataTableLink to="/users/new">Add New</DataTableLink>
			</DatatbleTitle>
			<DatableDataGrid
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={10}
				rowsPerPageOptions={[10]}
				checkboxSelection
			/>
		</DataTableContainer>
	)
}

export default DataTable
