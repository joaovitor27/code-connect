'use server'

import db from "../../prisma/migrations/db";
import {revalidatePath} from "next/cache";
import {Post} from "@prisma/client";

export async function incrementThumbsUp(post: Post) {
	await db.post.update({
		where: {
			id: post.id
		},
		data: {
			likes: {
				increment: 1
			}
		}
	});
	revalidatePath('/');
	revalidatePath(`/posts/${post.slug}`);
}