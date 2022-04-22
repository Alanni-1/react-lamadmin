import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import StoreIcon from '@mui/icons-material/Store'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

const sidebarData = [
	{
		title: 'MAIN',
	},
	{
		title: 'Dashboard',
		icon: <DashboardIcon />,
		to: '/',
	},
	{
		title: 'LISTS',
	},
	{
		title: 'Users',
		icon: <PersonOutlineIcon />,
		to: '/users',
	},
	{
		title: 'Products',
		icon: <StoreIcon />,
		to: 'products',
	},
	{
		title: 'Orders',
		icon: <CreditCardIcon />,
		to: '',
	},
	{
		title: 'Delivery',
		icon: <LocalShippingIcon />,
		to: '',
	},
	{
		title: 'USEFUL',
	},
	{
		title: 'Stats',
		icon: <InsertChartIcon />,
		to: '',
	},
	{
		title: 'Notifications',
		icon: <NotificationsNoneIcon />,
		to: '',
	},
	{
		title: 'SERVICE',
	},
	{
		title: 'System Health',
		icon: <SettingsSystemDaydreamOutlinedIcon />,
		to: '',
	},
	{
		title: 'Logs',
		icon: <PsychologyOutlinedIcon />,
		to: '',
	},
	{
		title: 'Settings',
		icon: <SettingsSystemDaydreamOutlinedIcon />,
		to: '',
	},
	{
		title: 'USER',
	},
	{
		title: 'Profile',
		icon: <AccountCircleOutlinedIcon />,
		to: '',
	},
	{
		title: 'Logout',
		icon: <ExitToAppIcon />,
		to: '',
	},
]

export default sidebarData
