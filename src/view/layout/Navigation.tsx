import { InfoIcon } from '@chakra-ui/icons'
import { VStack ,Center, IconButton, Link, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'

const Navigation: React.FC = () => {
  return (
    <VStack
      spacing={4}
      p={2}
    >
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="UserInfo"
        size='lg'
        fontSize="20px"
        to='/'
        icon={<InfoIcon />}
      />

      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Send email"
        size='lg'
        fontSize="20px"
        icon={<InfoIcon />}
      />

      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Send email"
        size='lg'
        fontSize="20px"
        icon={<InfoIcon />}
      />

      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Send email"
        size='lg'
        fontSize="20px"
        icon={<InfoIcon />}
      />
    </VStack>
  )
}

export default Navigation