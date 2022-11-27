import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import HomeBanner from './components/HomeBanner'
import Footer from './components/Footer'
import HomeIntro from './components/HomeIntro'
import { Container, HStack, VStack } from '@chakra-ui/react'
import Socials from './components/Socials'
import Portfolio from './components/Portfolio'
import Writing from './components/Writing'
import Location from './components/Location'
import Bookmarks from './components/Bookmarks'
import Upcoming from './components/Upcoming'


const Home: NextPage = () => {
  return (
    <>
    <Container maxW="6xl" marginTop={'-2rem'}>
      <HomeBanner />
      <HStack>
        <VStack>
        <Socials/>
        <Location />
        </VStack>
        <VStack >
          <Portfolio />
          <HStack>
            <Writing />
            <Bookmarks />
          </HStack>
          <Upcoming />
        </VStack>
      </HStack>
    </Container>
    <Footer />
    </>
  )
}

export default Home
