import styles from './subheading.module.css';

export function Subheading({children}: { children: string }) {
	return (
		<h2 className={styles.subheading}>{children}</h2>
	)
}