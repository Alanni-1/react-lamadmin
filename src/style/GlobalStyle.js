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

  body{
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  .box_shadow {
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  }
`

export default GlobalStyle
