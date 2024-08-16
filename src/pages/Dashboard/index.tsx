import { DashboardAdmin } from '../../components';
import styles from './style.module.css'

const userRole = sessionStorage.getItem('userRole')?.toLocaleString();

export function Dashboard() {
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