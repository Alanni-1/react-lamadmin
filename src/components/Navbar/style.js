import styled from 'styled-components'

export const NavbarContainer = styled.div`
	height: 50px;
	border-bottom: 0.5px solid ${({ theme }) => theme.borderColor};
	display: flex;
	align-items: center;
	font-size: 14px;
	color: #555;
`

export const Wrapper = styled.div`
	padding: 20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
export const NavbarItems = styled.div`
	display: flex;
	align-items: center;

	& > div {
		position: relative;
		display: flex;
		align-items: center;
		margin-right: 20px;
		color: ${({ theme }) => theme.navbar_color};

		svg {
			font-size: 20px;
		}

		img {
			width: 30px;
			height: 30px;
			border-radius: 50%;
		}

		& > div {
			width: 15px;
			height: 15px;
			background-color: red;
			border-radius: 50%;
			color: white;
			display: flex;
			font-size: 10px;
			font-weight: bold;
			align-items: center;
			justify-content: center;
			position: absolute;
			top: -5px;
			right: -5px;
		}
	}
`

export const Search = styled.div`
	display: flex;
	align-items: center;
	border: 0.5px solid ${({ theme }) => theme.borderColor};
	padding: 3px;

	input {
		border: none;
		outline: none;
		background-color: transparent;
		color: ${({ theme }) => theme.borderColor ? 'gray' : '#000'};

		&::placeholder {
			font-size: 12px;
		}
	}
`
