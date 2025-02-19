export interface Post {
	id: bigint;
	cover: string;
	title: string;
	slug: string;
	body: string;
	markdown: string;
	author: Author;
}

export interface Author {
	id: bigint;
	name: string;
	username: string;
	avatar: string;
}
