import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Spacer,
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
  Center,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'



const ArticleList = () => {
  return (
    <Container maxW={'6xl'} p="12" marginBottom='4rem'>   
      <Flex display={{ base: 'none', md: 'flex' }}>
              <DesktopNav />
        </Flex>

        <MobileNav />
    </Container>


  );
};
const YEAR = new Date().getFullYear()
const MONTH = new Date().getMonth()
const DAY = new Date().getDay()


const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
    <Stack
      margin={'2rem'}>
        <Text color={'gray.500'}
            fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} > 
            <time>{DAY}/{MONTH}/{YEAR}</time> 
        </Text>
        <Center>
            <Text color={'green.400'}
              fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} 
              padding={'2rem'}> 
              hey there.
        </Text>
        </Center>
        
      </Stack>
      
    </Stack>
  );
};


const DesktopNav = () => {

  return (
    <div >
    <Stack
      margin={'2rem'}>
        <Text color={'gray.500'}
            fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} > 
            <time>{DAY}/{MONTH}/{YEAR}</time> 
        </Text>
        <Center>
            <Text color={'green.400'}
              fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} 
              padding={'2rem'}> 
              hey there.
        </Text>
        </Center>
        
      </Stack>
      </div>
  );
};

export default ArticleList;
