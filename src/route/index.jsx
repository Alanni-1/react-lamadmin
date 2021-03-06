import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { userInputs, productInputs } from '../formSource'
import Home from '../pages/Home/Home'
import List from '../pages/List/List'
import Login from '../pages/Login/Login'
import New from '../pages/New/New'
import Single from '../pages/Single/Single'

const RouteContainer = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="login" element={<Login />} />

					<Route path="users">
						<Route index element={<List />} />
						<Route path=":userId" element={<Single />} />
						<Route
							path="new"
							element={
								<New inputs={userInputs} title="Add New User" />
							}
						/>
					</Route>

					<Route path="products">
						<Route index element={<List />} />
						<Route path=":productId" element={<Single />} />
						<Route
							path="new"
							element={
								<New
									inputs={productInputs}
									title="Add New Product"
								/>
							}
						/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default RouteContainer
