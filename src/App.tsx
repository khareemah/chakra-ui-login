import {
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

function App() {
  const { toggleColorMode } = useColorMode();
  // const formBackground = useColorModeValue('blue', 'green');
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <>
      <Flex h='100vh' alignItems='center' justifyContent='center'>
        <Flex
          direction='column'
          bg={formBackground}
          padding={12}
          rounded={6}
          minW='600px'
        >
          <Heading mb={6} textAlign='center'>
            Login Form
          </Heading>
          <Input
            placeholder='example@gmail.com'
            type='email'
            variant='filled'
            mb={3}
          />
          <Input
            placeholder='*******'
            variant='filled'
            type='password'
            mb={3}
          />
          <Button colorScheme='teal' mb={6}>
            Login
          </Button>
          <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
