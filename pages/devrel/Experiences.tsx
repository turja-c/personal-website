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
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.9
    }
  }
};


const Experiences = () => {
  return (
    <Container maxW={'6xl'} p="12" marginBottom='4rem'>   
    <Flex>
      <Heading as="h2" marginTop="5">
        Experiences
      </Heading>
      <Spacer />
      <Text marginTop='2rem' fontWeight={'bold'}><LearnMoreModal/> 
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

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
        
      <Box 
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            _hover={{boxShadow: 'lg'}}
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
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            _hover={{boxShadow: 'lg'}}
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
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            _hover={{boxShadow: 'lg'}}
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
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            _hover={{boxShadow: 'lg'}}
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
          rounded={'2xl'}
          borderWidth='0.2rem'
          borderColor='gray.200'
          _hover={{boxShadow: 'lg'}}
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
        rounded={'2xl'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        _hover={{boxShadow: 'lg'}}
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
    <div >
      <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
     <motion.div className="card" variants={cardVariants}>

    <HStack
      margin={'2rem'}>
        
      <Box
        position={'relative'}
        rounded={'2xl'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        _hover={{boxShadow: 'lg'}}
      >
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: 'none'}}>
                  <Image
                    transform="scale(1.0)"
                    // src={'https://images.unsplash.com/photos/NDfDl9hKgNs'}
                    // src={'https://images.unsplash.com/photo-NDfDl9hKgNs&auto=format&fit=crop&w=800&q=80'}
                    src='/static/ripple.png'
                    alt='ripple'
                    objectFit="contain"
                    height="12rem"
                    rounded='90px'
                    width="70rem"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)'                      
                    }} />
                </Link>
              </Box>
            </Box>
      </Box>
      <Box
        position={'relative'}
        rounded={'2xl'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        _hover={{boxShadow: 'lg'}}
        overflow={'hidden'}
      >
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform="scale(1.0)"
                    src='/static/kpmg.png'
                    alt='kpmg'
                    objectFit="contain"
                    height="12rem"
                    rounded='90px'
                    width="70rem"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }} />
                </Link>
              </Box>
            </Box>
      </Box>

      <Box
        position={'relative'}
        rounded={'2xl'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        overflow={'hidden'}
        _hover={{boxShadow: 'lg'}}
      >
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform="scale(1.0)"
                    src='/static/scotia.png'
                    alt='scotia'
                    objectFit="contain"
                    height="12rem"
                    rounded='90px'
                    width="70rem"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }} />
                </Link>
              </Box>
            </Box>
      </Box>
    </HStack>
    </motion.div>
    <motion.div className="card" variants={cardVariants}>
    <HStack
      margin={'2rem'}>
        <Box
        position={'relative'}
        rounded={'2xl'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        overflow={'hidden'}
        _hover={{boxShadow: 'lg' }}
      >
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform="scale(1.0)"
                    src='/static/d_d.png'
                    alt='scotia'
                    objectFit="contain"
                    height="12rem"
                    rounded='90px'
                    width="70rem"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }} />
                </Link>
              </Box>
            </Box>
      </Box>
      <Box
        position={'relative'}
        rounded={'2xl'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        overflow={'hidden'}
        _hover={{boxShadow: 'lg'}}
      >
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform="scale(1.0)"
                    src='/static/tmls.png'
                    alt='scotia'
                    objectFit="contain"
                    height="12rem"
                    rounded='90px'
                    width="70rem"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }} />
                </Link>
              </Box>
            </Box>
      </Box>
      <Box
        position={'relative'}
        rounded={'2xl'}
        borderWidth='0.2rem'
        borderColor='gray.200'
        overflow={'hidden'}
        _hover={{boxShadow: 'lg'}}
      >
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform="scale(1.0)"
                    src='/static/alo.png'
                    alt='scotia'
                    objectFit="contain"
                    height="12rem"
                    rounded='90px'
                    width="70rem"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }} />
                </Link>
              </Box>
            </Box>
      </Box>
      </HStack>
      </motion.div>
      </motion.div>
      </div>
  );
};

function LearnMoreModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Box onClick={onOpen} _hover={{ textDecoration: 'underline' }}>Learn More <ArrowRightIcon w={3} h={3} /></Box>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent style={{padding: '2rem'}}>
            <ModalHeader>Experiences</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Alchemy</Text>
              <Text>Freelance Technical Writer</Text>

              <br></br><hr></hr><br></br>

              <Text>Ripple Ventures</Text>
              <Text>Venture Analyst</Text>


              <br></br><hr></hr><br></br>

              <Text>KPMG</Text>
              <Text>Software Engineering Consultant</Text>

              <br></br><hr></hr><br></br>

              <Text>Scotiabank</Text>
              <Text>Strategy and Software Developer</Text>

              <br></br><hr></hr><br></br>

              <Text>Developer DAO</Text>
              <Text>Contributor & DevRel</Text>

              <br></br><hr></hr><br></br>

              <Text>Toronto Machine Learning Society</Text>
              <Text>Head Of Digital Marketing</Text>

              <br></br><hr></hr><br></br>

              <Text>Alo Food Group</Text>
              <Text>Lead Server Assistant</Text>

            </ModalBody>
            
          </ModalContent>
        </Modal>
      </>
    )
  };

export default Experiences;
