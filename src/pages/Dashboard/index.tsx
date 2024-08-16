import { DashboardAdmin, DashboardUser, Header } from '../../components';
import { decodeToken } from '../../validations/';
import styles from './style.module.css';

export function Dashboard() {
  const userRole = decodeToken(sessionStorage.getItem('accessToken')!).role;
  return (
    <>
      <Header />
      <main className={styles.dashboard}>
        {userRole === 'admin' ? <DashboardAdmin /> : <DashboardUser />}
      </main>
    </>
  );
}
