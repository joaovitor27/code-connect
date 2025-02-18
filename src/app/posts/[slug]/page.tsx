import logger from "@/logger";
import {remark} from "remark";
import html from 'remark-html';
import {CardPost} from "@/components/CardPost";

import styles from './page.module.css';

async function getPost(slug: string) {
  const res = await fetch(`http://localhost:3042/posts?slug=${slug}`);
  if (!res.ok) {
    logger.error(`Failed to fetch post with slug ${slug}`);
    return {};
  }
  logger.info(`Fetched post with slug ${slug}`);
  const data = await res.json();
  if (!data) {
    logger.error(`Failed to parse post with slug ${slug}`);
    return {};
  }
  const post = data[0];

  const processedContent = await remark().use(html).process(post.markdown);
  post.markdown = processedContent.toString();

  return post;
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
