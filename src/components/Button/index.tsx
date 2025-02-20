import styles from './button.module.css'

export function Button({children}: Readonly<{ children: string }>) {
	return <button className={styles.btn}>
		{children}
	</button>
}