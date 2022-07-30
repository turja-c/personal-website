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
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src='/static/ripple.png'
                  objectFit="contain"
                  alt="ripple"
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
                  src='/static/kpmg.png'
                  objectFit="contain"
                  alt='kpmg'
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
                  src='/static/scotia.png'
                  alt='scotia'
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
                  src='/static/d_d.png'
                  alt='d_d'
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
                  src='/static/tmls.png'
                  alt='tmls'
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
                  src='/static/alo.png'
                  objectFit="contain"
                  alt='alo'
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
                    src='/static/ripple.png'
                    alt='ripple'
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
                    alt='kpmg'
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
                    alt='scotia'
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
                      alt='d_d'
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
                      alt='tmls'
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
                      src='/static/alo.png'
                      alt='alo'
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
