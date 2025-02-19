import styles from './heading.module.css'

export function Heading({children}: Readonly<{ children: string }>) {
	return <h1 className={styles.heading}>{children}</h1>
}