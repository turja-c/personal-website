import { FunctionComponent } from "react";
import fs from 'fs';
import matter from "gray-matter";
import { ArticleInfo } from "../interface/article";
import Markdown from "../component/markdown";
import { NextPage } from "next";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {Container, Text} from "@chakra-ui/react";

interface IProps {
    article: ArticleInfo;
}

const Article: FunctionComponent<IProps> = ({ article }) => {
	return (
    <div>
    <Navbar />
    <div style={{marginTop: '5rem', marginBottom: '20rem'}} >
        <Container>
                <Text as={'span'} 
                      color={'black.800'} 
                      fontSize={'1.5rem'} 
                     > {article.meta.title}</Text>

                <br></br>  

                <Text as={'span'} 
                      color={'grey.100'} 
                      fontSize={'1rem'} >
                     <Markdown content={article.content} />
                </Text>
        </Container>
	</div>
    <Footer />
    </div>
   
    )
}

export async function getStaticProps({ ...ctx }) {
    const { slug } = ctx.params;

    const content = fs
        .readFileSync(`uploads/${slug}.md`)
        .toString();

    const info = matter(content);

    const article = {
        meta: {
            ...info.data,
            slug
        },
        content: info.content
    }

    return {
        props: {
            article: article
        }
    }
}

export async function getStaticPaths() {
    const files = fs.readdirSync("uploads");
    const paths = files.map(file => ({
        params: {
            slug: file.split('.')[0]
        }
    }))
    
    return {
        paths,
        fallback: false,
    }
}

export default Article;