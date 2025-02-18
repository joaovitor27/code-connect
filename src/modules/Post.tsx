export interface Post {
	id: number;
	cover: string;
	title: string;
	slug: string;
	body: string;
	markdown: string;
	author: Author;
}

export interface Author {
	id: number;
	name: string;
	username: string;
	avatar: string;
}