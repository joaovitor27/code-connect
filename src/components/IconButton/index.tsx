import styles from './iconbutton.module.css'
import React from "react";

export function IconButton({children, ...rest}: Readonly<React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
}>) {
	return <button {...rest} className={styles.iconBtn}>{children}</button>
}