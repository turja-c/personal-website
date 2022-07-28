import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  Flex,
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
    <Container maxW={'6xl'} p="12">      
      <Heading as="h2" marginTop="5">
        projects
      </Heading>
      <Divider marginTop="5" />

      <Flex display={{ base: 'none', md: 'flex' }}>
          <DesktopNav />
        </Flex>   
      <MobileNav />

      
    </Container>
  );
};



const DesktopNav = () => {

  return (
    <div> 
       <Box 
            position={'relative'}
            height={'150px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
            marginTop={'2rem'}
            marginBottom={'1rem'}
            // border={'solid; 0.5rem'}
            // borderColor={'gray'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }} style={{marginLeft: '5rem' }}>
          <Box w="100%">
            
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Granted
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Milestone-driven granting solution to provide visibility and bidirectional for sponsors and developers.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      <HStack>
        <Box 
            position={'relative'}
            height={'200px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }} style={{marginLeft: '3rem', marginRight: '3rem' }}>
          <Box w="100%">
            
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Unravel 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
                Gen-Z Web3 research curator including deep dive product reviews.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      {/* <Box style={{backgroundColor: 'white', padding: '2rem'}}> */}
      <Box 
            position={'relative'}
            height={'200px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }} style={{marginLeft: '3rem', marginRight: '3rem' }}>
          <Box w="100%">
            
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                The Good News 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
                Platform that displays positive articles based on users local community.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      {/* <Box style={{backgroundColor: 'white', padding: '2rem'}}> */}
      <Box 
            position={'relative'}
            height={'200px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }} style={{marginLeft: '3rem', marginRight: '3rem' }}>
          <Box w="100%">
            
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                MindTrack
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
                Interactive mental health platform that optimizes user data for personalized resources and assesments.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      
      </HStack>
      
    </div>

  );
};


const MobileNav = () => {

  return (
    <div>
        <Stack
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          display={{ md: 'none' }}>
        
        
      <Box 
            position={'relative'}
            height={'150px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
            marginTop={'2rem'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }} style={{marginLeft: '5rem' }}>
          <Box w="100%">
            
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Granted
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Milestone-driven granting solution to provide visibility and bidirectional for sponsors and developers.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      {/* <HStack> */}
        <Box 
            position={'relative'}
            height={'200px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }} style={{marginLeft: '3rem', marginRight: '3rem' }}>
          <Box w="100%">
            
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Unravel 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
                Gen-Z Web3 research curator including deep dive product reviews.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      <Box 
            position={'relative'}
            height={'200px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }} style={{marginLeft: '3rem', marginRight: '3rem' }}>
          <Box w="100%">
            
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Unravel 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
                Gen-Z Web3 research curator including deep dive product reviews.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      <Box 
            position={'relative'}
            height={'200px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }} style={{marginLeft: '3rem', marginRight: '3rem' }}>
          <Box w="100%">
            
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Unravel 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
                Gen-Z Web3 research curator including deep dive product reviews.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      </Box>
      
      </Stack>

      </div>
      
  );
};

export default ArticleList;
