import { Header } from '../../components';
import styles from './style.module.css';

export function Home() {
  const userName = sessionStorage.getItem('userName')?.toLocaleString();
  const userSurname = sessionStorage.getItem('userSurname')?.toLocaleString();
  const userRole = sessionStorage.getItem('userRole')?.toLocaleString();

  return (
    <>
      <Header />
      <main className={styles.home}>
        <h1>This is the home view</h1>
        <h2>{`Hello ${userName} ${userSurname}`}</h2>
        <h2>{`Your role is ${userRole}`}</h2>
      </main>
    </>
  );
}
