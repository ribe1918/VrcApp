import { ChakraProvider, extendTheme, Container, Grid, GridItem } from '@chakra-ui/react'
import React                                      from 'react'


const colors = {
  brand: {
    1000: "#000000",
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors })

const DefaultLayout: React.FC = (props) => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='xl'>
        <Grid
          h='200px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg="tomato" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={4} bg="tomato" />
          {props.children}
        </Grid>
      </Container>
    </ChakraProvider>
  )
}
export default DefaultLayout
