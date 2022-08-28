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
  Button,
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
          <Tag size={'md'} variant="solid" colorScheme="green" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};



const ArticleList = () => {
  return (
    <Container maxW={'5xl'} p="12" marginBottom={'2rem'}>
      <Heading as="h1">thoughts &#38; articles</Heading>
      <Text color={'gray.500'}
            fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} 
            marginTop={'1rem'}>
            sharing a few of my thoughts and learnings. 
            </Text>


      <Box
        marginTop={{ base: '1', sm: '2rem' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        position={'relative'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        padding={'1.2rem'}
        overflow={'hidden'}
        width={'full'}
        marginBottom={'2rem'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        _hover={{boxShadow: 'lg'}}>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src='/static/activate.png'
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
          >
          <BlogTags tags={['Hackathon', 'Web3']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Activate x Wormhole Hackathon
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="sm">
            If someone told me a month ago that my first international trip in three years 
            would be to Miami for a Web 3 hackathon - I would&apos;ve immediately thought that it 
            was a crazy lie. I was given an opportunity to attend Activate x Wormhole thanks to a 
            scholarship sponsored by C3 Protocol and here is the short story of my experience...
          </Text>
          
          <Link href='https://turja.substack.com/p/activate-x-wormhole-hackathon'>
            <Button height={'2rem'} marginTop={'1rem'}>
              Read more
            </Button>
          </Link>
          
        </Box>
      </Box>
      
      
      <Box
        marginTop={{ base: '1', sm: '2rem' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        position={'relative'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        padding={'1.2rem'}
        overflow={'hidden'}
        width={'full'}
        marginBottom={'2rem'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        _hover={{boxShadow: 'lg'}}
        >

          
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src='/static/near.png'
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Web3','Product Review', 'Blockcahin']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Let&apos;s talk Web 3: NEAR Protocol?
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="sm">
            Imagine a blockchain that is designed for developers, capable of supporting 
            decentralized applications (dApps) through an entirely revolutionized system 
            and higher compared to the impact of AWS in the blockchain space. Did I also 
            forget to mention that this blockchain was kickstarted as an ML project before it developed into a blockchain protocol? 
          </Text>
          
          <Link href='https://turja.substack.com/p/lets-talk-web-3-near-protocol'>
            <Button height={'2rem'} marginTop={'1rem'}>
              Read more
            </Button>
          </Link>
        </Box>
      </Box>



      <Box
        marginTop={{ base: '1', sm: '2rem' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        position={'relative'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        padding={'1.2rem'}
        overflow={'hidden'}
        width={'full'}
        marginBottom={'2rem'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        _hover={{boxShadow: 'lg'}}>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src='/static/metamask.png'
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Web3','Product Review', 'Blockcahin']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Let&apos;s talk Web 3: Metamask Product Review?
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="sm">
              An application that you most likely have heard of everywhere, 
              especially when someone attempts to teach you how to get into crypto. 
              In the simplest terms, it&apos;s a crypto wallet available on your favorite browser 
              (i.e. Chrome, Firefox, etc.) and recently a mobile application, but only supporting 
              Ethereum Virtual Machine (EVM) networks...
          </Text>
          <Link href='https://turja.substack.com/p/lets-talk-web-3-metamask-product'>
            <Button height={'2rem'} marginTop={'1rem'}>
              Read more
            </Button>
          </Link>
          
        </Box>
      </Box>
      
      
      <Box
        marginTop={{ base: '1', sm: '2rem' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        position={'relative'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        padding={'1.2rem'}
        overflow={'hidden'}
        width={'full'}
        marginBottom={'2rem'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        _hover={{boxShadow: 'lg'}}>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src='/static/opensea.png'
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Web3','Product Review', 'Blockcahin']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Let&apos;s talk Web 3: OpenSea?
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="sm">
            If you&apos;re looking to purchase your first NFT, 
            you&apos;ve most likely heard of OpenSea in the same sentence. 
            An NFT marketplace that has gained tremendous attention in the 
            past few months and undoubtly will continue to excel in the years to come...
          </Text>
          <Link href='https://turja.substack.com/p/lets-talk-web-3-opensea-product-review'>
            <Button height={'2rem'} marginTop={'1rem'}>
              Read more
            </Button>
          </Link>
        </Box>
      </Box>

    

      <Box
        marginTop={{ base: '1', sm: '2rem' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        position={'relative'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        padding={'1.2rem'}
        overflow={'hidden'}
        width={'full'}
        marginBottom={'2rem'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        _hover={{boxShadow: 'lg'}}>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src='/static/flow.png'
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Web3','Product Review', 'Blockcahin']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Let&apos;s talk Web3: Flow Blockchain Review
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="sm">
            Flow is a layer one blockchain created to adopt an improved approach 
            to entertainment-driven crypto assets specifically Non-Fungible Tokens (NFTs). 
            It aims to improve scalability, transaction costs, and model development (smart 
            contracts) beyond the traditional capabilities offered by Ethereum...
          </Text>
          <Link href='https://turja.substack.com/p/lets-talk-web3-flow-blockchain-review'>
            <Button height={'2rem'} marginTop={'1rem'}>
              Read more
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        marginTop={{ base: '1', sm: '2rem' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        position={'relative'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        padding={'1.2rem'}
        overflow={'hidden'}
        width={'full'}
        marginBottom={'2rem'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        _hover={{boxShadow: 'lg'}}>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src='/static/crypto.png'
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Web3','Product Review', 'Blockcahin']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Let&apos;s talk Web 3: Exploring New Boundaries
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="sm">
            In the past two years, crypto and web 3 are two terms that were used everywhere 
            whether it&apos;s social media or a small conversation at the virtual office. 
            We&apos;ve seen numerous Fortune 500 companies, celebrities, or even countries 
            invest in crypto, but not everyone understands it...
          </Text>
          <Link href='https://turja.substack.com/p/lets-talk-web-3-exploring-new-boundaries'>
            <Button height={'2rem'} marginTop={'1rem'}>
              Read more
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        marginTop={{ base: '1', sm: '2rem' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        position={'relative'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        padding={'1.2rem'}
        overflow={'hidden'}
        width={'full'}
        marginBottom={'2rem'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        _hover={{boxShadow: 'lg'}}>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src='/static/cyber.png'
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Cybersecurity','Industry Review']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Let&apos;s talk Cybersecurity: how protected are you online?
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="sm">
            When I&apos;m scrolling through social media, purchasing unnecessary items 
            from Amazon, or googling different random thoughts - my online presence 
            and safety aren&apos;t two topics circling my mind. Why should it be? I generally 
            use strong passwords and big tech platforms, so I usually assume that I&apos;m well 
            protected - but I definitely received a loud awakening as I dove into cybersecurity... 
          </Text>
          <Link href='https://turja.substack.com/p/lets-talk-cybersecurity-how-protected'>
            <Button height={'2rem'} marginTop={'1rem'}>
              Read more
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        marginTop={{ base: '1', sm: '2rem' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        position={'relative'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        padding={'1.2rem'}
        overflow={'hidden'}
        width={'full'}
        marginBottom={'2rem'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        _hover={{boxShadow: 'lg'}}>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src='/static/blockchain.png'
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Blockchain', 'Industry Review']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Let&apos;s talk Blockchain: What&apos;s it All About?
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="sm">
            Have you recently come across these following words: Blockchain, 
            Bitcoin, Ethereum or NFT? Whether you heard it mentioned in a short 
            conversation or on the news, these buzzwords have gained tremendous 
            attention and created an aura of hype wherever they appear...
          </Text>
          <Link href='https://turja.substack.com/p/lets-talk-blockchain-whats-it-all'>
            <Button height={'2rem'} marginTop={'1rem'}>
              Read more
            </Button>
          </Link>
        </Box>
      </Box>
      
      <Box
        marginTop={{ base: '1', sm: '2rem' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        position={'relative'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        padding={'1.2rem'}
        overflow={'hidden'}
        width={'full'}
        marginBottom={'2rem'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        _hover={{boxShadow: 'lg'}}>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src='/static/nocode.png'
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['No-code', 'Industry Review']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Let&apos;s talk No-code &#38; Low-code development: can this trend be explained?
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="sm">
            No-code/Low-code development has gained tremendous momentum in recent years 
            and the hype can definitely be explained. The push towards these software design 
            systems provides an accessible and user-friendly interface for anyone no matter their 
            background to create software without writing a single line of code...
          </Text>
          <Link href='https://turja.substack.com/p/lets-talk-blockchain-whats-it-all'>
            <Button height={'2rem'} marginTop={'1rem'}>
              Read more
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default ArticleList;
