import React from 'react'
import { WidgetContainer, WidgetLeft, WidgetRight, Percentage } from './style'
import { KeyboardArrowUp } from '@mui/icons-material'
import { typeData } from './data'

const Widget = ({type}) => {
  const {title, isMoney, link, icon} = typeData(type)

  // temporary
  const amount = 100
  const diff = 20

	return (
		<WidgetContainer>
			<WidgetLeft>
				<span>{title}</span>
				<span>{isMoney && '$'}{amount}</span>
				<span>{link}</span>
			</WidgetLeft>
			<WidgetRight>
				<Percentage negative>
					<KeyboardArrowUp />
					{diff}%
				</Percentage>
				{icon}
			</WidgetRight>
		</WidgetContainer>
	)
}

export default Widget
