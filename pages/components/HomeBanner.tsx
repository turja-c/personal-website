import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Link,
    Icon,
    HStack,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { BsTwitter, BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';
  
  export default function CallToActionWithVideo() {
    return (
      <Container maxW={'7xl'} marginBottom={'2rem'}>
        <Flex display={{ base: 'none', md: 'flex' }}>
          <DesktopNav/>
        </Flex>
        <MobileNav />
      </Container>
    );
  }
  

  
  export const Blob = (props: IconProps) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };
  
  const DesktopNav = () => {
    return (
      <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              
              <br />
              <Text as={'span'} color={'black.400'}>
                turja chowdhury
              </Text>
            </Heading>
            <Text color={'gray.500'}
            fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} >
            
            hey there! welcome to my little corner of the internet. 
            </Text>
            <Text color={'gray.500'}
            fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} >
            i&apos;m driven and passionate about emerging 
            technologies challenging complex problems. building in Web3 and always learning.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
               <Link href="https://twitter.com/tchowd_" color="#000">
                  <Icon as={BsTwitter} width={35} height={35} style={{marginRight: '2rem'}}/>
                </Link>
                <Link href="https://github.com/turja-c"  color="#000">
                  <Icon as={BsGithub} w={35} h={35} style={{marginRight: '2rem'}}/>
                </Link>
                <Link href="https://linkedin.com/in/tchowd"  color="#000">
                  <Icon as={BsLinkedin} w={35} h={35} style={{marginRight: '2rem'}}/>
                </Link>
                <Link href="turja.c16@gmail.com"  color="#000">
                  <Icon as={BsTelegram} w={35} h={35}/>
                </Link>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'450%'}
              h={'350%'}
              position={'absolute'}
              top={'-125%'}
              left={'-8%'}
              zIndex={-1}
              color={useColorModeValue('green.50', 'green.400')}
            />
            <Box
              // position={'relative'}
              // height={'300px'}
              // rounded={'2xl'}
              // boxShadow={'2xl'}
              // width={'full'}
              // overflow={'hidden'}
              >
                <Image
                  transform="scale(1.0)"
                  src='/static/turja.png'
                  alt="some text"
                  objectFit="contain"
                  marginLeft='5rem'
                  width="70%"
                  // shadow={'2xl'}
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />

            </Box>
          </Flex>
        </Stack>
    );
  }


  const MobileNav = () => {
    return (
      <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
          display={{md: 'none'}}
          >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              
              <br />
              <Text as={'span'} color={'black.400'}>
                turja chowdhury
              </Text>
            </Heading>
            <Text color={'gray.500'}
            fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} >
            
            hey there! welcome to my little corner of the internet. 
            </Text>
            <Text color={'gray.500'}
            fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} >
            i&apos;m driven and passionate about emerging 
            technologies challenging complex problems. building in Web3 and always learning.
            </Text>
            <HStack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
              paddingTop={'1rem'}
              paddingBottom={'2rem'}
              align={'center'}>
               <Link href="https://twitter.com/tchowd_" color="#000">
                  <Icon as={BsTwitter} width={35} height={35} style={{marginRight: '2rem'}}/>
                </Link>
                <Link href="https://github.com/turja-c"  color="#000">
                  <Icon as={BsGithub} w={35} h={35} style={{marginRight: '2rem'}}/>
                </Link>
                <Link href="https://linkedin.com/in/tchowd"  color="#000">
                  <Icon as={BsLinkedin} w={35} h={35} style={{marginRight: '2rem'}}/>
                </Link>
                <Link href="turja.c16@gmail.com"  color="#000">
                  <Icon as={BsTelegram} w={35} h={35}/>
                </Link>
            </HStack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'450%'}
              h={'360%'}
              position={'absolute'}
              top={'-130%'}
              left={'-2%'}
              zIndex={-1}
              color={useColorModeValue('green.50', 'green.400')}
            />
            <Box
              // position={'relative'}
              // height={'300px'}
              // rounded={'2xl'}
              // boxShadow={'2xl'}
              // width={'full'}
              // overflow={'hidden'}
              >
                <Image
                  transform="scale(1.0)"
                  src='/static/turja.png'
                  alt="some text"
                  objectFit="contain"
                  marginLeft='5rem'
                  width="70%"
                  // shadow={'2xl'}
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />

            </Box>
          </Flex>
        </Stack>
    )
  }