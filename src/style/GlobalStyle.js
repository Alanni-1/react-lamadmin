import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.color};
  }
`

export default GlobalStyle
