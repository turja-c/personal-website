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
import styles from '../../styles/Home.module.css'

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
      <Heading as="h2" marginTop="5" className={styles.gradient}>
        Experiences
      </Heading>
      <Spacer />
      <Text marginTop='2rem' fontWeight={'bold'} _hover={{textDecoration: "underline"}}> 
       <LearnMoreModal />
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
              <Box borderRadius="lg" overflow="hidden"
              // bgGradient={[
              //   'linear(to-tr, purple.100, purple.100)',
              //   'linear(to-t, blue.100, teal.100)',
              //   'linear(to-b, blue.50, blue.200)',
              // ]}
              >
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
              <Box borderRadius="lg" overflow="hidden"
              // bgGradient={[
              //   'linear(to-tr, purple.100, purple.100)',
              //   'linear(to-t, blue.100, teal.100)',
              //   'linear(to-b, blue.50, blue.200)',
              // ]}
              >
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
              <Box borderRadius="lg" overflow="hidden"
              // bgGradient={[
              //   'linear(to-tr, purple.100, purple.100)',
              //   'linear(to-t, blue.100, teal.100)',
              //   'linear(to-b, blue.50, blue.200)',
              // ]}
              >
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
              <Box borderRadius="lg" overflow="hidden"
              // bgGradient={[
              //   'linear(to-tr, purple.100, purple.100)',
              //   'linear(to-t, blue.100, teal.100)',
              //   'linear(to-b, blue.50, blue.200)',
              // ]}
              >
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
              <Box borderRadius="lg" overflow="hidden"
              // bgGradient={[
              //   'linear(to-tr, purple.100, purple.100)',
              //   'linear(to-t, blue.100, teal.100)',
              //   'linear(to-b, blue.50, blue.200)',
              // ]}
              >
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
              <Box borderRadius="lg" overflow="hidden"
              // bgGradient={[
              //   'linear(to-tr, purple.100, purple.100)',
              //   // 'linear(to-t, blue.100, teal.100)',
              //   'linear(to-b, blue.50, blue.200)',
              // ]}
              >
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

    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayTwo />)
  
    return (
      <>
        
        <Box
          marginBottom={'-21rem'}
          ml='4'
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
          as='kbd'
        >
          Learn More <ArrowRightIcon w={3} h={3} />
        </Box>
        <Modal isCentered isOpen={isOpen} onClose={onClose} size='2xl' >
          {overlay}
          <ModalContent padding={'-10rem'}>
            <ModalHeader>Experiences</ModalHeader>
            <ModalCloseButton />
            <ModalBody marginBottom={'2rem'}>
              <Flex>
              <Text>Alchemy</Text>
              <Spacer/>
              <Text>Technical Analyst</Text>
              </Flex>

              <br></br><hr></hr><br></br>
              <Flex>
              <Text>Ripple Ventures</Text>
              <Spacer/>
              <Text>Venture Analyst</Text>
              </Flex>

              <br></br><hr></hr><br></br>
              <Flex>
              <Text>KPMG</Text>
              <Spacer/>
              <Text>Software Engineering Consultant</Text>
              </Flex>
              <br></br><hr></hr><br></br>

              <Flex>
              <Text>Scotiabank</Text>
              <Spacer />
              <Text>Strategy and Software Developer</Text>
              </Flex>

              <br></br><hr></hr><br></br>

              <Flex>
              <Text>Developer DAO</Text>
              <Spacer />
              <Text>Contributor & DevRel</Text>
              </Flex>
              <br></br><hr></hr><br></br>

              <Flex>
              <Text>Toronto Machine Learning Society</Text>
              <Spacer />
              <Text>Head Of Digital Marketing</Text>
              </Flex>

              <br></br><hr></hr><br></br>

              <Flex>
              <Text>Alo Food Group</Text>
              <Spacer />
              <Text>Lead Server Assistant</Text>
              </Flex>

            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  };
export default Experiences;
