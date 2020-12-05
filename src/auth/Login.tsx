import React from 'react'
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'

const LoginForm: React.FC = () => {

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={8} maxWidth="500px" borderWidth={2} borderRadius={8}
           boxShadow="lg">
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Username/Email:</FormLabel>
              <Input type="email"/>
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Password:</FormLabel>
              <Input type="password"/>
            </FormControl>
            <Button type="submit" variantColor="teal" variant="outline"
                    width="full" mt={4}>
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}

export default LoginForm