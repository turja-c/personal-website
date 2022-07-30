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
  Spacer,
  Button,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'


interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="green" key={tag}>
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
      <Flex>
      <Heading as="h2" marginTop="5">
        thoughts
      </Heading>
      <Spacer />
      <Text marginTop='2rem' fontWeight={'bold'}>Learn more  
        &nbsp;
        <ArrowRightIcon w={3} h={3} /> 
      </Text>
    </Flex> 
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
            <BlogTags tags={['Web3', 'Product Review']} marginTop="3" />
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
            <Button height={'2rem'} marginTop={'1rem'}>Read more</Button>
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
            <BlogTags tags={['Web3', 'Product Review']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Let&apos;s talk Web 3: OpenSea 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            If you&apos;re looking to purchase your first NFT, you&apos;ve most likely 
            heard of OpenSea in the same sentence. An NFT marketplace that has 
            gained tremendous attention in the past few months and undoubtly will continue to excel in the years to come.
            But before we take any step forward, let&apos;s quickly understand...
            </Text>
            <Button height={'2rem'} marginTop={'1rem'}>Read more</Button>
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
            <BlogTags tags={['Web3', 'Product Review']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Let&apos;s talk Web 3: Flow Blockchain
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Flow is a layer one blockchain created to adopt an improved approach 
            to entertainment-driven crypto assets specifically Non-Fungible Tokens 
            (NFTs). It aims to improve scalability, transaction costs, and model development 
            (smart contracts) beyond the traditional capabilities...
            </Text>
            <Button height={'2rem'} marginTop={'1rem'}>Read more</Button>
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
            <BlogTags tags={['Web3', 'Product Review']} marginTop="3" />
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
            <BlogTags tags={['Web3', 'Product Review']} marginTop="3" />
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
            <BlogTags tags={['Web3', 'Product Review']} marginTop="3" />
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
