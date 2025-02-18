import styles from './aside.module.css';
import Image from 'next/image';
import logo from './logo.png';

export function Aside() {
	return (
		<aside className={styles.aside}>
			<Image src={logo} alt={'logo da Code Connect'}/>
		</aside>
	);
}