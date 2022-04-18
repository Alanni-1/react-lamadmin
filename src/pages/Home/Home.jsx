import React from 'react'

import { HomeContainer, HomeMain } from './style'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
	return (
		<HomeContainer>
			<Sidebar />
			<HomeMain>container</HomeMain>
		</HomeContainer>
	)
}

export default Home
