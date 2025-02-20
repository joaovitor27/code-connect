import { Post, User, Comment } from '@prisma/client';

// Define um tipo para um Post que já inclui o autor
export type PostWithAuthor = Post & {
	author: User;
};

// Define um tipo para um Comment que inclui o autor e o post
export type CommentWithAuthor = Comment & {
	author: User;
	post: Post;
};

// Caso queira incluir os comentários dentro do Post
export type PostWithAuthorAndComments = Post & {
	author: User;
	comments: CommentWithAuthor[];
};
