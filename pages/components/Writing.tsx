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
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'



const Writing = () => {
  return (
    <Container maxW={'6xl'}  >   
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
      display={{ md: 'none' }}
      >
    <Container maxW='6xl'>
        
        <Text color={'white.500'}
            fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} > 
            writing about my 
            learnings, failures and next steps. there&apos;s always someway to grow. so i decided to write publicly and share what i learn. <br></br> <br></br>
            show up everyday and <b> <a href="https://twitter.com/fredvanvleet" style={{textDecoration: 'underline', cursor: 'pointer'}}>bet on yourself</a></b>.  
        </Text>

      </Container>
    </Stack>
  );
};


const DesktopNav = () => {

  return (
    <div >
        <Box
        position={'relative'}
        rounded={'lg'}
        width={'21rem'}
        marginRight={'3rem'}
        backgroundColor={'blue.100'}
        marginTop={'1.5rem'}
        overflow={'hidden'}
        height={'20rem'}
        p={2}
        _hover={{boxShadow: 'lg'}}
        >
          <Heading
              lineHeight={1.1}
              fontWeight={200}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              >
              <Text as={'span'} color={'black.400'}>
                library
              </Text>
          </Heading>
        </Box>
      </div>
  );
};


export default Writing;
