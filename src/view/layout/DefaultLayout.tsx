import { GridItem, Grid } from '@chakra-ui/react'
import React from 'react'
import Navigation from './Navigation'

const DefaultLayout: React.FC = (props) => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(30, 1fr)"
      templateColumns="repeat(20, 1fr)"
      gap={2}
    >
      <GridItem rowSpan={30} colSpan={1} bg="tomato"><Navigation/></GridItem>
      <GridItem rowSpan={2} colSpan={19} bg="papayawhip"/>
      <GridItem rowSpan={27} colSpan={19} bg="tomato">{props.children}</GridItem>
      <GridItem rowSpan={1} colSpan={19} bg="tomato"/>
    </Grid>
  )
}
export default DefaultLayout
