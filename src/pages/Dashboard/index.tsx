import { DashboardAdmin, DashboardUser, Header } from '../../components';
import styles from './style.module.css'

export function Dashboard() {
  const userRole = sessionStorage.getItem('userRole')?.toLocaleString();
  return (
  <>
    <Header />
    <main className={styles.dashboard}>
      {
        userRole === 'admin' ? (
          <DashboardAdmin />
        ) : (
          <DashboardUser />
        )
      }

    </main>
    </>
  )
}