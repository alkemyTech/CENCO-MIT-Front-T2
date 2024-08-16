import styles from './style.module.css';
import image from '../../assets/img/pageNotFound.png';

export function NotFoundPage() {
  return (
    <main className={styles.notFound}>
      <img src={image} alt='avatar' />
    </main>
  )
}