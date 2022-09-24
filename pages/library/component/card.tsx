import Link from "next/link";
import { FunctionComponent } from "react";
import { ArticleMeta } from "../interface/article";
import styles from "../../../styles/card.module.css";
import { Box } from "@chakra-ui/react";

interface IProps {
	article: ArticleMeta;
}

const Card: FunctionComponent<IProps> = ({ article }) => {
	return (
	<Link href={`/library/article/${article.slug}`}>
		<Box _hover={{cursor: 'pointer'}}>
			<div style={{marginTop: '2rem', marginBottom: '2rem'}}>
				<h1>{article.title}</h1> 
				<h2>{article.date}</h2> <br></br>
				<p>{article.description}</p>
			</div>
			<hr></hr>
		</Box>
	</Link>
	)
}

export default Card;