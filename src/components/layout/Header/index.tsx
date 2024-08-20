import styles from './style.module.css'
import { Nav } from '../..';

export function Header() {
  return (
    <header className={styles.header}>
        <Nav />   
    </header>
  );
}
