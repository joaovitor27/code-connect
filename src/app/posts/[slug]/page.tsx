import logger from "@/logger";
import {remark} from "remark";
import html from 'remark-html';
import {CardPost} from "@/components/CardPost";

import styles from './page.module.css';
import db from "../../../../prisma/migrations/db";
import {redirect} from "next/navigation";

async function getPost(slug: string) {
  try {
    const post = await db.post.findUnique({
      where: {
        slug: slug
      },
      include: {
        author: true,
        comments: true,
      }
    })

    if (!post) {
      throw new Error("Post not found");
    }

    const processedContent = await remark().use(html).process(post.markdown);
    post.markdown = processedContent.toString();

    return post;
  } catch (error) {
    logger.error("Failed to fetch post", {slug, error});
    redirect('/not-found');
  }
}

export default async function PagePost({params,}: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  const post = await getPost(slug);
    return (<div>
        <CardPost post={post} highlight />
        <h3 className={styles.subtitle}>Código:</h3>
        <div className={styles.code}>
            <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </div>
    </div>)
}
