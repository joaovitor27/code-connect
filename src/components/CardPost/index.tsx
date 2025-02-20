import {Avatar} from "@/components/Avatar";
import Image from "next/image";

import styles from "./cardpost.module.css";
import Link from "next/link";
import {incrementThumbsUp} from "@/actions";
import {PostWithAuthor} from "@/types/prisma";
import {ThumbsUpButton} from "@/components/CardPost/ThumbsUpButton";


export function CardPost({post, highlight}: Readonly<{ post: PostWithAuthor, highlight?: boolean }>) {

	const submitThumbsUp = incrementThumbsUp.bind(null, post);

	return (
		<article className={styles.card} style={{width: highlight ? 993 : 486}}>
			<header className={styles.header}>
				<figure style={{height: highlight ? 300 : 133}}>
					<Image src={post.cover} alt={post.title} fill sizes={"100%"}/>
				</figure>
			</header>
			<section className={styles.body}>
				<h2>{post.title}</h2>
				<p>{post.body}</p>
				{!highlight && <Link href={`/posts/${post.slug}`}>Leia mais</Link>}
			</section>
			<footer className={styles.footer}>
				<div>
					<form action={submitThumbsUp}>
						<ThumbsUpButton/>
					</form>
					<p>
						{post.likes}
					</p>

				</div>
				<Avatar src={post.author.avatar} alt={post.author.username} name={post.author.username}/>
			</footer>
		</article>
	);
}
