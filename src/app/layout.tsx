import type {Metadata} from "next";
import {Prompt} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import {Aside} from "@/components/Aside";

const prompt = Prompt({
	weight: ["400", "600"],
	subsets: ["latin"],
	display: "swap",
})

export const metadata: Metadata = {
	title: "Code connect",
	description: "Code connect is a platform for developers to connect and share their code.",
};

export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {
	return (
		<html lang="pt-BR" className={prompt.className}>
		<body>
		<div className={"container"}>
			<Aside/>
			<div className={"main-content"}>
				{children}
			</div>
		</div>
		</body>
		</html>
	);
}
