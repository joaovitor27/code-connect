import styles from './button.module.css'
import {ReactNode} from "react";

export function Button({children, type}: Readonly<{
	children: string | ReactNode;
	type: 'button' | 'submit' | 'reset'
}>) {
	return <button className={styles.btn} type={type}>
		{children}
	</button>
}