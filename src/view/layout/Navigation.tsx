import { InfoIcon } from '@chakra-ui/icons'
import { Center, IconButton, Link, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'

const Navigation: React.FC = () => {
  return (
        <List spacing={3}>
          <Link>
            <ListItem>
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Send email"
                size='lg'
                icon={<InfoIcon />}
              />
            </ListItem>
          </Link>
        </List>
  )
}

export default Navigation