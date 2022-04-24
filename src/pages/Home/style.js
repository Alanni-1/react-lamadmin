import styled from 'styled-components'
import { Charts } from '../../style'

export const HomeWidgets = styled(Charts)``
export const HomeCharts = styled(Charts)``

export const ListContainer = styled.div.attrs({
	className: 'box_shadow'
})`
	padding: 20px;
	margin-bottom: 20px;

	& > .title {
		font-weight: 500;
		color: gray;
		margin-bottom: 15px;
	}
`
