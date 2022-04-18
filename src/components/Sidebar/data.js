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
	},
	{
		title: 'LISTS',
	},
	{
		title: 'Users',
		icon: <PersonOutlineIcon />,
	},
	{
		title: 'Products',
		icon: <StoreIcon />,
	},
	{
		title: 'Orders',
		icon: <CreditCardIcon />,
	},
	{
		title: 'Delivery',
		icon: <LocalShippingIcon />,
	},
	{
		title: 'USEFUL',
	},
	{
		title: 'Stats',
		icon: <InsertChartIcon />,
	},
	{
		title: 'Notifications',
		icon: <NotificationsNoneIcon />,
	},
  {
    title: 'SERVICE'
  },
	{
		title: 'System Health',
		icon: <SettingsSystemDaydreamOutlinedIcon />,
	},
	{
		title: 'Logs',
		icon: <PsychologyOutlinedIcon />,
	},
  {
    title: 'Settings',
    icon: <SettingsSystemDaydreamOutlinedIcon />,
  },
	{
		title: 'USER',
	},
	{
		title: 'Profile',
		icon: <AccountCircleOutlinedIcon />,
	},
	{
		title: 'Logout',
		icon: <ExitToAppIcon />,
	},
]

export default sidebarData
