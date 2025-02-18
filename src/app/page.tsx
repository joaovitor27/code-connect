import styles from "./page.module.css";
import {CardPost} from "@/components/CardPost";
import {Post} from "@/modules/Post";
import logger from "@/logger";

async function getPosts(page: number, perPage: number = 6) {
	const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=${perPage}`);
	if (!response.ok) {
		logger.error("Failed to fetch posts", response);
		return [];
	}
	logger.info("Fetched posts", response);
	return response.json();
}

export default async function Home() {

	const {data: posts} = await getPosts(1);

	return (
		<main className={styles.container + " " + styles.grid}>
			{posts.map((post: Post) => (
				<CardPost post={post} key={post.id}/>
			))}
		</main>
	);
}
