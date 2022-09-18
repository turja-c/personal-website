import { NextPage } from 'next';
// import ArticleList from './FullBlog';
import ArticleList from './First';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Library: NextPage = () => {
  return (
    <div >
    <Navbar />
    <ArticleList />
     <Footer />
    </div>
  )
}

export default Library;
