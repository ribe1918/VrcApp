import React from 'react'
import {
    Flex,
    Box,
    Heading,
    Text,
} from '@chakra-ui/react'

const NotFound: React.FC = () => {
    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={8} maxWidth="500px">
                <Box textAlign="center">
                    <Heading size="3xl">404</Heading>
                    <Text>Not Found</Text>
                </Box>
            </Box>
        </Flex>
    )
}

export default NotFound