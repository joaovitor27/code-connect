import {Avatar} from "@/components/Avatar";
import {Post} from "@/modules/Post";
import Image from "next/image";

import styles from "./cardpost.module.css";


export function CardPost({post}: Readonly<{ post: Post }>) {
	return (
		<article className={styles.card}>
			<header className={styles.header}>
				<figure>
					<Image src={post.cover} alt={post.title} width={438} height={133}/>
				</figure>
			</header>
			<section className={styles.body}>
				<h2>{post.title}</h2>
				<p>{post.body}</p>
			</section>
			<footer className={styles.footer}>
				<Avatar src={post.author.avatar} alt={post.author.username} name={post.author.username}/>
			</footer>
		</article>
	);
}