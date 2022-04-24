import styled from 'styled-components'

export const WidgetContainer = styled.div.attrs({
	className: 'box_shadow',
})`
	display: flex;
	justify-content: space-between;
	flex: 1;
	padding: 10px;
	border-radius: 10px;
	height: 100px;

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`

export const WidgetLeft = styled.div`
	span:nth-child(1) {
		font-weight: bold;
		font-size: 14px;
		color: rgb(160, 160, 160);
	}

	span:nth-child(2) {
		font-size: 28px;
		font-weight: 300;
		color: ${({ theme }) => theme.stroke};
	}
	
	span:nth-child(3) {
		font-size: 12px;
		border-bottom: 1px solid gray;
		color: ${({ theme }) => theme.stroke};
	}
`

export const WidgetRight = styled.div`
	& > svg {
		font-size: 18px;
		padding: 5px;
		align-self: flex-end;
	}
`

export const Percentage = styled.div`
	display: flex;
	font-size: 14px;
	align-items: center;
	color: ${(props) => {
		if (props?.positive) {
			return 'green'
		} else if (props?.negative) {
			return 'red'
		}
	}};
`
