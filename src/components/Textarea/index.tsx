import styles from './textarea.module.css';
import {TextareaHTMLAttributes} from "react";

export function Textarea({...rest}: Readonly<TextareaHTMLAttributes<HTMLTextAreaElement>>) {
	return <textarea className={styles.textarea} {...rest}></textarea>
}