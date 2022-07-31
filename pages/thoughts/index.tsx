import { NextPage } from 'next';
import ArticleList from './FullBlog';
import Navbar from './../components/Navbar'
import Footer from './../components/Footer'

const Blog: NextPage = () => {
  return (
    <div >
    <Navbar />
     <ArticleList/>
     <Footer />
    </div>
  )
}

export default Blog;
