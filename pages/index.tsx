import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import HomeBanner from './components/HomeBanner'
import BlogList from './blog/BlogList'
import Footer from './components/Footer'
import HomeBlogs from './components/HomeBlogs'
import HomeExperience from './components/HomeExperience'
import HomeProjects from './components/HomeProjects'

const Home: NextPage = () => {
  return (
    <div >
      <Navbar />
      
      <HomeBanner />
      {/* <BlogList /> */}
      <HomeExperience />
      <HomeBlogs />
      <HomeProjects />
      <Footer />
    </div>
  )
}

export default Home
