import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Collapse,
  Tag,
  Flex,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  Stack,
  VStack,
} from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={'6xl'} p="12" >      
      <Heading as="h2" marginTop="5">
        experience
      </Heading>
      <Divider marginTop="5" />

      

      <Flex display={{ base: 'none', md: 'flex' }}>
              <DesktopNav />
            </Flex>

      {/* <Collapse > */}
        <MobileNav />
      {/* </Collapse> */}
    </Container>


  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
        <Box 
            position={'relative'}
            // height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
        >
      {/* <Wrap spacing="30px" marginTop="5"> */}
      {/* <WrapItem width={{ base: '100%', sm: '90%' }}> */}
          {/* <Box w="100%"> */}
            {/* <Box borderRadius="lg" overflow="hidden"> */}
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={'./public/images/kpmg.png'}
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            {/* </Box> */}
          {/* </Box> */}
        {/* </WrapItem> */}
      {/* </Wrap> */}
      </Box>
      

      <Box 
            position={'relative'}
            // height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      <Box 
            position={'relative'}
            // height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      <Box 
            position={'relative'}
            // height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      <Box 
            position={'relative'}
            // height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      <Box 
            position={'relative'}
            // height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
      </Box>


      
    </Stack>
  );
};


const DesktopNav = () => {

  return (
    <div>
    <HStack
      margin={'2rem'}>
      <Box
        position={'relative'}
        // height={'300px'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        // width={'full'}
        overflow={'hidden'}
        // backgroundColor={'blue'}

      >
        {/* <Wrap spacing="30px" marginTop="5"> */}
          {/* <WrapItem width={{ base: '100%', sm: '90%' }}> */}
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform="scale(1.0)"
                    // src={'https://images.unsplash.com/photos/NDfDl9hKgNs'}
                    // src={'https://images.unsplash.com/photo-NDfDl9hKgNs&auto=format&fit=crop&w=800&q=80'}
                    src='/static/rippleV.svg'
                    alt="some text"
                    objectFit="contain"
                    height="12rem"
                    width="70rem"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }} />
                </Link>
              </Box>
            </Box>
          {/* </WrapItem> */}
        {/* </Wrap> */}
      </Box>
      <Box
        position={'relative'}
        // height={'300px'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        // width={'full'}
        overflow={'hidden'}
      >
        {/* <Wrap spacing="30px" marginTop="5"> */}
          {/* <WrapItem width={{ base: '100%', sm: '90%' }}> */}
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform="scale(1.0)"
                    src='/static/kpmg.png'
                    alt="some text"
                    objectFit="contain"
                    height="12rem"
                    width="70rem"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }} />
                </Link>
              </Box>
            </Box>
          {/* </WrapItem> */}
        {/* </Wrap> */}
      </Box>

      <Box
        position={'relative'}
        // height={'300px'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        // width={'full'}
        overflow={'hidden'}
      >
        {/* <Wrap spacing="30px" marginTop="5"> */}
          {/* <WrapItem width={{ base: '100%', sm: '90%' }}> */}
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform="scale(1.0)"
                    src='/static/scotia.png'
                    alt="some text"
                    objectFit="contain"
                    height="12rem"
                    width="70rem"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }} />
                </Link>
              </Box>
            </Box>
          {/* </WrapItem> */}
        {/* </Wrap> */}
      </Box>
    </HStack>
    <HStack
      margin={'2rem'}>
        <Box
          position={'relative'}
          // height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          // width={'full'}
          overflow={'hidden'}
        >
          {/* <Wrap spacing="30px" marginTop="5"> */}
            {/* <WrapItem width={{ base: '100%', sm: '90%' }}> */}
              <Box w="100%">
                <Box borderRadius="lg" overflow="hidden"
                  >
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Image
                      transform="scale(1.0)"
                      src='/static/d_d.png'
                      alt="some text"
                      objectFit="contain"
                      height="12rem"
                      width="70rem"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: 'scale(1.05)',
                      }} />
                  </Link>
                </Box>
              </Box>
            {/* </WrapItem> */}
          {/* </Wrap> */}
        </Box>
        <Box
          position={'relative'}
          // height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          // width={'full'}
          overflow={'hidden'}
        >
          {/* <Wrap spacing="30px" marginTop="5"> */}
            {/* <WrapItem width={{ base: '100%', sm: '90%' }}> */}
              <Box w="100%">
                <Box borderRadius="lg" overflow="hidden">
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Image
                      transform="scale(1.0)"
                      src='/static/tmls.png'
                      alt="some text"
                      objectFit="contain"
                      height="12rem"
                      width="70rem"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: 'scale(1.05)',
                      }} />
                  </Link>
                </Box>
              </Box>
            {/* </WrapItem> */}
          {/* </Wrap> */}
        </Box>

        <Box
          position={'relative'}
          // height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          // width={'full'}
          overflow={'hidden'}
        >
          {/* <Wrap spacing="30px" marginTop="5"> */}
            {/* <WrapItem width={{ base: '100%', sm: '90%' }}> */}
              <Box w="100%">
                <Box borderRadius="lg" overflow="hidden">
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Image
                      transform="scale(1.0)"
                      src='/static/alo.svg'
                      alt="some text"
                      objectFit="contain"
                      height="12rem"
                      width="70rem"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: 'scale(1.05)',
                      }} />
                  </Link>
                </Box>
              </Box>
            {/* </WrapItem> */}
          {/* </Wrap> */}
        </Box>
      </HStack>
      </div>
  );
};

export default ArticleList;
