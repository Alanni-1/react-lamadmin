import styled from 'styled-components'

export const SidebarContainer = styled.div`
	flex: 1;
	min-height: 100vh;
`

export const SidebarLogo = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid lightgray;

	.logo {
		font-size: 20px;
		font-weight: bold;
		color: #6439ff;
	}
`

export const SidebarNav = styled.div`
	padding-left: 10px;

	p {
		font-size: 10px;
		font-weight: bold;
		color: #999;
		margin: 15px 0;
	}

	li {
		display: flex;
		align-items: center;
		padding: 5px;
		cursor: pointer;

		&:hover {
			background-color: #ece8ff;
		}

		svg {
			font-size: 18px;
			color: #7451f8;
		}

		span {
			font-size: 13px;
			font-weight: 600;
			color: #888;
			margin-left: 10px;
		}
	}
`

export const SwitchColor = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 10px;

  div:last-child {
    margin-right: 0;
  }
`
export const ButColor = styled.div`
	width: 30px;
	height: 30px;
	background-color: ${({ color }) => color};
	border-radius: 50%;
	border: 2px solid ${props => props.theme.color};
	box-sizing: border-box;
	cursor: pointer;
	margin-right: 10px;
`