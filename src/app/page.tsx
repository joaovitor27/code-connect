import styles from "./page.module.css";
import {CardPost} from "@/components/CardPost";
import {Post} from "@/modules/Post";
import {Prisma} from "@prisma/client";
import logger from "@/logger";
import Link from "next/link";
import db from "../../prisma/migrations/db";

interface HomeProps {
	searchParams: Promise<{ [key: string]: string | undefined }>;
}

async function getPostDb(page: number, search: string) {
	try {
		const where: Prisma.PostWhereInput = {};

		if (search) {
			where.title = {
				contains: search,
				mode: 'insensitive'
			};
		}

		const perPage = 6;
		const prev = page > 1 ? page - 1 : null;
		const total = await db.post.count({where});
		const totalPages = Math.ceil(total / perPage);
		const next = page < totalPages ? page + 1 : null;

		const posts = await db.post.findMany({
			take: perPage,
			orderBy: {
				createdAt: 'desc'
			},
			where,
			skip: (page - 1) * perPage,
			include: {
				author: true
			}
		});

		return {data: posts, prev, next};
	} catch (error) {
		logger.error("Failed to fetch posts", {error});
		return {data: [], prev: null, next: null};
	}
}

export default async function Home({searchParams}: HomeProps) {
	const page = parseInt((await searchParams).page || '1');
	const search = (await searchParams).q || '';

	const {data: posts, prev, next} = await getPostDb(page, search);

	return (
		<main className={styles.container + " " + styles.grid}>
			{posts.map((post: Post) => (
				<CardPost post={post} key={post.id}/>
			))}
			{prev && <Link href={{pathname: '/', query: {page: prev, search: search}}}>Anterior</Link>}
			{next && <Link href={{pathname: '/', query: {page: next, search: search}}}>Próximo</Link>}
		</main>
	);
}
