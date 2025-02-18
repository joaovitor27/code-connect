import {Avatar} from "@/components/Avatar";
import {Post} from "@/modules/Post";
import Image from "next/image";

import styles from "./cardpost.module.css";
import Link from "next/link";


export function CardPost({post, highlight }: Readonly<{ post: Post, highlight?: boolean }>) {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
      <article className={styles.card}  style={{ width: highlight ? 993 : 486}}>
        <header className={styles.header}>
          <figure style={{ height: highlight ? 300 : 133}}>
            <Image src={post.cover} alt={post.title} fill/>
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
    </Link>
  );
}
