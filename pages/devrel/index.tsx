import { NextPage } from 'next';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainIntro from './MainIntro'
import Experiences from './Experiences'
import Projects from './Projects'
import Community from './Community'
import Content from './Content'

const DevRel: NextPage = () => {
  return (
    <div >
    <Navbar />
        <MainIntro />
        <Projects />
        <Content />
        <Experiences /> 
        <Community />
    <Footer />
    </div>
  )
}

export default DevRel;
