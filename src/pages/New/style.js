import styled from 'styled-components'

export const NewContainer = styled.div``

export const NewTop = styled.div.attrs({
	className: 'box_shadow',
})`
	padding: 10px;
	margin-bottom: 20px;
	display: flex;

	h1 {
		color: lightgray;
		font-size: 20px;
	}
`

export const NewBotton = styled(NewTop)`
	& > div:nth-child(1) {
		flex: 1;
		text-align: center;

		img {
			width: 100px;
			height: 100px;
			border-radius: 50%;
			object-fit: cover;
		}
	}

	& > div:nth-child(2) {
		flex: 2;

		form {
			display: flex;
			flex-wrap: wrap;
			gap: 30px;
			justify-content: space-around;
			color: ${({ theme }) => theme.table_color};

			.formInput {
				width: 40%;

				label {
					display: flex;
					align-items: center;
					gap: 10px;

					svg {
						cursor: pointer;
					}
				}

				input {
					width: 100%;
					padding: 5px;
					border: none;
					border-bottom: 1px solid gray;
					background-color: ${({ theme }) =>
						theme.input_backgroundColor};
				}
			}

			button {
				width: 150px;
				padding: 10px;
				border: none;
				background-color: teal;
				color: white;
				font-weight: bold;
				cursor: pointer;
				margin-top: 10px;
			}
		}
	}
`
