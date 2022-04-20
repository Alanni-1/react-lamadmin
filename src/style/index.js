import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
`

export const Left = styled.div`
	flex: 1;
`

export const Right = styled.div`
	flex: 6;
	max-height: 100vh;
`
export const Main = styled.main`
	padding: 20px 20px 0;
	height: calc(100% - 51px);
	overflow: auto;
	box-sizing: border-box;
`
