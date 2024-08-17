import { DashboardAdmin } from '../../components';
import styles from './style.module.css'

export function Dashboard() {
  const userRole = sessionStorage.getItem('userRole')?.toLocaleString();

  return (
    <main className={styles.dashboard}>
      {
        userRole === 'admin' ? (
          <DashboardAdmin />
        ) : (
          <h1>This is the dashboard user view</h1>
        )
      }

    </main>
  )
}