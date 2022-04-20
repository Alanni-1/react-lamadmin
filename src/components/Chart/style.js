import styled from 'styled-components'

export const ChartContainer = styled.div`
	flex: 4;
	box-shadow: ${({ theme }) => theme.boxShadow};
	padding: 10px;
	color: gray;

	.chartGrid {
		stroke: rgb(228, 225, 225);
	}
`

export const ChartTitle = styled.div`
	margin-bottom: 20px;
`
