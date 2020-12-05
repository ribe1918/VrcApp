import { ChakraProvider } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'

ReactDOM.render(
  <>
    <StrictMode>
      <ChakraProvider>
        <App/>
      </ChakraProvider>
    </StrictMode>
  </>,
  document.getElementById('root'),
)
