interface ArticleMeta {
	title: string;
	slug: string;
	date: string;
	description: string;
	thumbnail: string;
}

interface ArticleInfo {
	meta: ArticleMeta;
	content: string;
}

export type {
	ArticleMeta,
	ArticleInfo
}