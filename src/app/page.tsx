import styles from "./page.module.css";
import {CardPost} from "@/components/CardPost";
import {Post} from "@/modules/Post";
import logger from "@/logger";
import Link from "next/link";
import db from "../../prisma/migrations/db";

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

async function getPosts(page: string, perPage: string = '6') {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=${perPage}`);
  if (!response.ok) {
    logger.error("Failed to fetch posts", response);
    return [];
  }
  logger.info("Fetched posts", response);
  return response.json();
}

async function getPostDb(page: string) {
  try {
    const posts = await db.post.findMany({
      include: {
        author: true
      }
    })
    return {data: posts, prev: null, next: null};
  } catch (error) {
    logger.error("Failed to fetch posts", {error});
    return {data: [], prev: null, next: null};
  }
}

export default async function Home({searchParams}: HomeProps) {
  const page = (await searchParams).page || '1';

  const {data: posts, prev, next} = await getPostDb(page);

  return (
    <main className={styles.container + " " + styles.grid}>
      {posts.map((post: Post) => (
        <CardPost post={post} key={post.id}/>
      ))}
      {prev && <Link href={`/?page=${prev}`}>Anterior</Link>}
      {next && <Link href={`/?page=${next}`}>Próximo</Link>}
    </main>
  );
}
