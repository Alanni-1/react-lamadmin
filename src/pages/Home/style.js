import styled from 'styled-components'

export const HomeWidgets = styled.div`
	padding-bottom: 20px;
	display: flex;
	gap: 20px;
`
export const HomeCharts = styled(HomeWidgets)``

export const ListContainer = styled.div`
	box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
	padding: 20px;
	margin-bottom: 20px;

	& > .title {
		font-weight: 500;
		color: gray;
		margin-bottom: 15px;
	}
`
