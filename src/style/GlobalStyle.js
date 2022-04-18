// 全局样式文件
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  ul,ol,li {
    list-style-type: none;
  }
`

export default GlobalStyle
