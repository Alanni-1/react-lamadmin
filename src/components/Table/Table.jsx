import React from 'react'
import { TableBody, TableHead, TableRow, Paper } from '@mui/material'
import { DataTableCell, DataTableContainer, DataTableTable } from './style'

const Tables = () => {
	const rows = [
		{
			id: 1143155,
			product: 'Acer Nitro 5',
			img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
			customer: 'John Smith',
			date: '1 March',
			amount: 785,
			method: 'Cash on Delivery',
			status: 'Approved',
		},
		{
			id: 2235235,
			product: 'Playstation 5',
			img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
			customer: 'Michael Doe',
			date: '1 March',
			amount: 900,
			method: 'Online Payment',
			status: 'Pending',
		},
		{
			id: 2342353,
			product: 'Redragon S101',
			img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
			customer: 'John Smith',
			date: '1 March',
			amount: 35,
			method: 'Cash on Delivery',
			status: 'Pending',
		},
		{
			id: 2357741,
			product: 'Razer Blade 15',
			img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
			customer: 'Jane Smith',
			date: '1 March',
			amount: 920,
			method: 'Online',
			status: 'Approved',
		},
		{
			id: 2342355,
			product: 'ASUS ROG Strix',
			img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
			customer: 'Harold Carol',
			date: '1 March',
			amount: 2000,
			method: 'Online',
			status: 'Pending',
		},
	]

	return (
		<DataTableContainer component={Paper}>
			<DataTableTable sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<DataTableCell>Tracking ID</DataTableCell>
						<DataTableCell>Product</DataTableCell>
						<DataTableCell>Customer</DataTableCell>
						<DataTableCell>Date</DataTableCell>
						<DataTableCell>Amount</DataTableCell>
						<DataTableCell>Payment Method</DataTableCell>
						<DataTableCell>Status</DataTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<DataTableCell>{row.id}</DataTableCell>
							<DataTableCell>
								<div className="cellWrapper">
									<img
										src={row.img}
										alt=""
										className="image"
									/>
									{row.product}
								</div>
							</DataTableCell>
							<DataTableCell>{row.customer}</DataTableCell>
							<DataTableCell>{row.date}</DataTableCell>
							<DataTableCell>{row.amount}</DataTableCell>
							<DataTableCell>{row.method}</DataTableCell>
							<DataTableCell>
								<span className={`${row.status}`}>
									{row.status}
								</span>
							</DataTableCell>
						</TableRow>
					))}
				</TableBody>
			</DataTableTable>
		</DataTableContainer>
	)
}

export default Tables
