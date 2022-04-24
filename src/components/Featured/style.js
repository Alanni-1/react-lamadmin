import styled from 'styled-components'

export const FeaturedContainer = styled.div.attrs({
	className: 'box_shadow'
})`
	flex: 2;
	padding: 10px;
`

export const FeaturedTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: gray;

	h1 {
		font-size: 16px;
		font-weight: 500;
	}
`

export const FeaturedBotton = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;

	& > p:nth-of-type(1) {
		font-weight: 500;
		color: gray;
	}

	& > p:nth-of-type(2) {
		font-size: 30px;
		color: ${({ theme }) => theme.stroke};
	}

	& > p:nth-of-type(3) {
		font-weight: 300;
		font-style: 12px;
		color: gray;
		text-align: center;
	}

	.summary {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.item {
			text-align: center;

			.itemTitle {
				font-style: 14px;
				color: gray;
			}
		}
	}
`

export const FeaturedChart = styled.div`
	width: 100px;
	height: 100px;
`

export const ItemResult = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
	font-style: 14px;
	color: ${(props) => {
		if(props?.positive) {
			return 'green'
		} else if(props?.negative) {
			return 'red'
		}
	}};
`