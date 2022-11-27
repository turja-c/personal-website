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
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import { BsTwitter, BsGithub, BsLinkedin, BsTelegram, BsYoutube } from 'react-icons/bs';



const Socials = () => {
  return (
    <Container maxW={'6xl'} p="12" >   
      <Flex display={{ base: 'none', md: 'flex' }}>
              <DesktopNav />
        </Flex>

        <MobileNav />
    </Container>


  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      // p={4}
      display={{ md: 'none' }}
      >
    <Container maxW='6xl'>
        
        <Text color={'white.500'}
            fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} > 
            writing about my 
            learnings, failures and next steps. there&apos;s always someway to grow. so i decided to write publicly and share what i learn. <br></br> <br></br>
            show up everyday and <b> <a href="https://twitter.com/fredvanvleet" style={{textDecoration: 'underline', cursor: 'pointer'}}>bet on yourself</a></b>.  
        </Text>
        <Center>
        </Center>
      </Container>
    </Stack>
  );
};


const DesktopNav = () => {

  return (
    <VStack marginTop={'-14rem'} marginBottom={'-1rem'}>
        <Box
            position={'relative'}
            rounded={'lg'}
            width={'20rem'}
            height={'3.5rem'}
            backgroundColor='blue.200'
            overflow={'hidden'}
            _hover={{backgroundColor: 'blue.100'}}
            maxW='6xl'>
            <Center>
                <Link href="https://twitter.com/tchowd_" color="white" >
                    <Icon  as={BsTwitter} width={35} height={35} style={{marginTop: '0.7rem'}}/>
                </Link>
            </Center>
        </Box>
        <Box
            position={'relative'}
            rounded={'lg'}
            width={'20rem'}
            height={'3.5rem'}
            backgroundColor='gray.300'
            overflow={'hidden'}
            _hover={{backgroundColor: 'gray.100'}}
            maxW='6xl'>
        <Center>
        <Link href="https://github.com/turja-c"  color="#fff">
            <Icon as={BsGithub} w={35} h={35} style={{marginTop: '0.7rem'}}/>
        </Link>
        </Center>
        </Box>
        <Box
            position={'relative'}
            rounded={'lg'}
            width={'20rem'}
            height={'3.5rem'}
            backgroundColor='blue.400'
            overflow={'hidden'}
            _hover={{backgroundColor: 'gray.100'}}
            maxW='6xl'>
        <Center>
        <Link href="https://linkedin.com/in/tchowd"  color="#fff">
            <Icon as={BsLinkedin} w={35} h={35} style={{marginTop: '0.7rem'}}/>
        </Link>
        </Center>
        </Box>
        <Box
            position={'relative'}
            rounded={'lg'}
            width={'20rem'}
            height={'3.5rem'}
            backgroundColor='red.400'
            overflow={'hidden'}
            _hover={{backgroundColor: 'gray.100', color: 'black'}}
            maxW='6xl'>
        <Center>
        <Link href="https://youtube.com/turjachowdhury"  color="#fff">
            <Icon as={BsYoutube} w={35} h={35} style={{marginTop: '0.7rem'}}/>
        </Link>
        </Center>
        </Box>
        <Box
            position={'relative'}
            rounded={'lg'}
            width={'20rem'}
            height={'3.5rem'}
            backgroundColor='blue.300'
            overflow={'hidden'}
            _hover={{backgroundColor: 'blue.100'}}
            maxW='6xl'>
        <Center>
        <Link href="https://t.me/tchowd"  color="#fff">
            <Icon as={BsTelegram} w={35} h={35} style={{marginTop: '0.7rem'}}/>
        </Link>
        </Center>
        </Box>
      </VStack>
  );
};

export default Socials;
