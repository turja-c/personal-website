import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Articles from './Articles'
import Experiences from './Experiences'
import Projects from './Projects'
import { Center, Container, Heading, Text } from '@chakra-ui/react'

const Work: NextPage = () => {
  return (
    <div >
      <Navbar />
      <Container maxW={'6xl'} p="12" >
        <Heading as="h1">work</Heading>
        <Text color={'white.500'}
            fontSize={{ base: '1.5xl', sm: '1.5xl', lg: '1.5xl' }} 
            marginTop={'1rem'}>
                here are a few of my past projects and experiences. please feel free to 
                contact me directly to learn more about my past experiences! <br></br>
                building in Web3 - intersted in zk proofs, account abstraction, MEVs and much more.
        </Text>
        </Container>
      {/* <Articles /> */}
      <Projects />
      <Experiences />
      <Footer />
    </div>
  )
}

export default Work
