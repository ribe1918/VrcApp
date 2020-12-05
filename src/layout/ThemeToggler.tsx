import { useColorMode, Box, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'

const ThemeToggler: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box textAlign="right" py={4} mr={12}>
      <IconButton
        aria-label="Toggle Color Mode"
        icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  )
}
export default ThemeToggler
