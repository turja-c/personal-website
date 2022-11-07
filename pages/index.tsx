import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import HomeBanner from './components/HomeBanner'
import Footer from './components/Footer'
import HomeIntro from './components/HomeIntro'

const Home: NextPage = () => {
  return (
    <div >
      <Navbar />
      <HomeBanner />
      <HomeIntro />
      <Footer />
    </div>
  )
}

export default Home
