import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  Stack,
  HStack,
  Tag,
  Flex,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
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
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">

      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={'6xl'} p="12">      
      <Heading as="h2" marginTop="">
        thoughts
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
      <HStack marginTop={'2rem'}>
      <Box 
            position={'relative'}
            // height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            // width={'full'}
            padding={'1.2rem'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src='/static/near.png'
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
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Let&apos;s talk Web 3: NEAR Protocol 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Imagine a blockchain that is designed for developers, capable of 
            supporting decentralized applications (dApps) through an entirely 
            revolutionized system and higher compared to the impact of AWS in 
            the blockchain space. Did I also forget to mention that this blockchain...
            </Text>
            <BlogAuthor
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      <Box 
            position={'relative'}
            // height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            // width={'full'}
            padding={'1.2rem'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src='/static/opensea.png'
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
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Let&apos;s talk Web 3: NEAR Protocol 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Imagine a blockchain that is designed for developers, capable of 
            supporting decentralized applications (dApps) through an entirely 
            revolutionized system and higher compared to the impact of AWS in 
            the blockchain space. Did I also forget to mention that this blockchain...
            </Text>
            <BlogAuthor
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      <Box 
            position={'relative'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            padding={'1.2rem'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src='/static/flow.png'
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
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Let&apos;s talk Web 3: NEAR Protocol 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Imagine a blockchain that is designed for developers, capable of 
            supporting decentralized applications (dApps) through an entirely 
            revolutionized system and higher compared to the impact of AWS in 
            the blockchain space. Did I also forget to mention that this blockchain...
            </Text>
            <BlogAuthor
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

        <Stack
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          display={{ md: 'none' }}>
        <Box 
            position={'relative'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            padding={'1.2rem'}
            overflow={'hidden'}
        >      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src='/static/near.png'
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
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Let&apos;s talk Web 3: NEAR Protocol 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Imagine a blockchain that is designed for developers, capable of 
            supporting decentralized applications (dApps) through an entirely 
            revolutionized system and higher compared to the impact of AWS in 
            the blockchain space. Did I also forget to mention that this blockchain...
            </Text>
            <BlogAuthor
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      <Box 
            position={'relative'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            padding={'1.2rem'}
            overflow={'hidden'}
        >
      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src='static/opensea.png'
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
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Let&apos;s talk Web 3: NEAR Protocol 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Imagine a blockchain that is designed for developers, capable of 
            supporting decentralized applications (dApps) through an entirely 
            revolutionized system and higher compared to the impact of AWS in 
            the blockchain space. Did I also forget to mention that this blockchain...
            </Text>
            <BlogAuthor
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      <Box 
            position={'relative'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            padding={'1.2rem'}
            overflow={'hidden'}
        >      <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src='/static/flow.png'
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
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Let&apos;s talk Web 3: NEAR Protocol 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Imagine a blockchain that is designed for developers, capable of 
            supporting decentralized applications (dApps) through an entirely 
            revolutionized system and higher compared to the impact of AWS in 
            the blockchain space. Did I also forget to mention that this blockchain...
            </Text>
            <BlogAuthor
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      
      </Stack>


      
  );
};



export default ArticleList;
