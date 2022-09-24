import styles from '../../styles/Home.module.css'
import Card from './component/card'
import fs from 'fs'
import matter from 'gray-matter'
import { ArticleMeta } from './interface/article'
import { FunctionComponent } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NextPage } from 'next'
import { Center, Container, Text } from '@chakra-ui/react'

interface IProps {
    articles: ArticleMeta[];
}

const Home: FunctionComponent<IProps> = ({ articles }) => {
    return (
        <div>
        <Navbar />

            <Center style={{marginTop: '5rem'}}>
                <Text>df</Text>
            </Center>

            <Container style={{marginTop: '10rem', marginBottom: '30rem'}}>
                
                {
                    articles.map((article, i) => (
                        <Card key={i} article={article} />
                    ))
                }
            </Container>
        <Footer />
        </div>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync("uploads");
    
    let articles = files.map(file => {
        const data = fs
            .readFileSync(`uploads/${file}`)
            .toString();

        return {
            ...matter(data).data,
            slug: file.split('.')[0]
        };
    });

    return {
        props: {
            articles: articles
        }
    };
}

export default Home;