import {
	AccountBalanceWalletOutlined,
	MonetizationOnOutlined,
	PersonOutlined,
	ShoppingCartCheckoutOutlined,
} from '@mui/icons-material'

export function typeData(type) {
	let data
	switch (type) {
		case 'user':
			data = {
				title: 'USERS',
				isMoney: false,
				link: 'See all users',
				icon: (
					<PersonOutlined
						style={{
							color: 'crimson',
							backgroundColor: 'rgba(255, 0, 0, .2)',
						}}
					/>
				),
			}
			break

		case 'order':
			data = {
				title: 'ORDERS',
				isMoney: false,
				link: 'View all orders',
				icon: (
					<ShoppingCartCheckoutOutlined
						style={{
							color: 'goldenrod',
							backgroundColor: 'rgba(218, 165, 32, .2)',
						}}
					/>
				),
			}
			break

		case 'erarning':
			data = {
				title: 'ERARNINGS',
				isMoney: true,
				link: 'View all erarings',
				icon: (
					<MonetizationOnOutlined
						style={{
							color: 'greeen',
							backgroundColor: 'rgba(0, 128, 0, .2)',
						}}
					/>
				),
			}
			break

		case 'balance':
			data = {
				title: 'BALANCE',
				isMoney: true,
				link: 'See details',
				icon: (
					<AccountBalanceWalletOutlined
						style={{
							color: 'purple',
							backgroundColor: 'rgba(128, 0, 128, .2)',
						}}
					/>
				),
			}
			break

		default:
			break
	}
	return data
}
