import React from 'react'

import { HomeContainer, HomeMain } from './style'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
	return (
		<HomeContainer>
			<Sidebar />
			<HomeMain>
				<Navbar />
			</HomeMain>
		</HomeContainer>
	)
}

export default Home
