import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import HomeBanner from './components/HomeBanner'
import Footer from './components/Footer'
import HomeIntro from './components/HomeIntro'
import { Container } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
    <Navbar />
    <Container maxW="6xl">
      <HomeBanner />
      <HomeIntro />
    </Container>
    <Footer />
    </>
  )
}

export default Home
