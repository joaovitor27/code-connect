import Image from "next/image";
import styles from "./avatar.module.css";

export function Avatar({src, alt, name}: Readonly<{
	src: string;
	alt: string;
	name: string;
}>) {
	return (
		<ul className={styles.avatar}>
			<li>
				<Image src={src} alt={alt} width={32} height={32}/>
			</li>
			<li>
				@{name}
			</li>
		</ul>
	);
}