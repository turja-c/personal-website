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



const HomeIntro = () => {
  return (
    <Container maxW={'6xl'} p="12" marginBottom='4rem'>   
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
            <Popup />
        </Center>
      </Container>
    </Stack>
  );
};


const DesktopNav = () => {

  return (
    <div >
    <Stack
      margin={'2rem'}>
        <Container
      margin={'2rem'} maxW='6xl'>
        <Text color={'white.500'}
            fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} > 
            writing about my 
            learnings, failures and next steps. there&apos;s always someway to grow. so i decided to write publicly and share what i learn. <br></br> <br></br>
        </Text>
        <VStack>
        <Text color={'white.500'}
            fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} > 
            show up everyday and <b> <a href="https://twitter.com/fredvanvleet" style={{textDecoration: 'underline', cursor: 'pointer'}}>bet on yourself</a></b>.  

            </Text>
        <Center>
            <Popup />
        </Center>
        </VStack>
        </Container>
      </Stack>
      </div>
  );
};

function Popup() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Text color={'green.400'}
              fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} 
              padding={'2rem'}
              onClick={onOpen}
              _hover={{textDecoration: 'underline', cursor: 'pointer'}}> 
              walk into my library
        </Text>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Center>
            Currently under construction. 
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default HomeIntro;
