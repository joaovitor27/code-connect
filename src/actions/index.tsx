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


export async function postComment(post: Post, formData: any, username: string = 'anabeatriz_dev') {
	const author = await db.user.findUnique({
		where: {
			username: username
		}
	});

	if (!author) {
		throw new Error("User not found");
	}

	console.log('author', author);
	console.log('post', post);
	console.log('formData', formData);

	await db.comment.create({
		data: {
			authorId: author.id,
			postId: post.id,
			text: formData.text
		}
	});

	revalidatePath('/');
	revalidatePath(`/posts/${post.slug}`);

}