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
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps"



const Location = () => {
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

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const DesktopNav = () => {

  return (
    <div >
        <Box
        position={'relative'}
        rounded={'lg'}
        borderWidth='0.2rem'
        width={'25rem'}
        marginBottom={'2rem'}
        borderColor='gray.200'
        // overflow={'hidden'}
        height={'20rem'}
        p={2}
        _hover={{boxShadow: 'lg'}}
        >
          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              >
              <Text as={'span'} color={'black.400'}>
                location
              </Text>

          </Heading>
          <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#D6D6DA"
        stroke="#000"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      
    </ComposableMap>
            
        </Box>
      </div>
  );
};


export default Location;
