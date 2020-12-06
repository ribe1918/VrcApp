import React, { useState } from 'react'
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'
import LoginFunction from '../api/login'

const LoginForm: React.FC = () => {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    LoginFunction(userId, password)
  }

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={8} maxWidth="500px" borderWidth={2} borderRadius={8}
           boxShadow="lg">
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Username/Email:</FormLabel>
              <Input
                type="text"
                onChange={event => setUserId(event.currentTarget.value)}
                size="lg"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Password:</FormLabel>
              <Input
                type="password"
                onChange={event => setPassword(event.currentTarget.value)}
                size="lg"
              />
            </FormControl>
            <Button
              type="submit"
              variantColor="teal"
              variant="outline"
              width="full" mt={4}
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}

export default LoginForm