import React from 'react'
import { CSSReset, theme, ThemeProvider } from '@chakra-ui/react'
import ThemeToggler from './layout/ThemeToggler'
import RootRoute from '../routes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset/>
      <ThemeToggler/>
      <RootRoute/>
    </ThemeProvider>
  )
}
export default App
