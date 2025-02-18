import styles from "./page.module.css";
import {CardPost} from "@/components/CardPost";
import {Post} from "@/modules/Post";

async function getPosts() {
	const response = await fetch("http://localhost:3042/posts");
	if (!response.ok) {
		throw new Error("Failed to fetch posts");
	}
	return response.json();
}

export default async function Home() {

	const posts = await getPosts();

	return (
		<main className={styles.container}>
			{posts.map((post: Post) => (
				<CardPost post={post} key={post.id}/>
			))}
		</main>
	);
}
