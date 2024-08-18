import styles from './style.module.css'
import { DashboardAdmin } from '../../components';
import { DashboardUser } from "../../components/DashboardUser";

export function Dashboard() {
  const userRole = sessionStorage.getItem('userRole')?.toLocaleString();

  return (
    <main className={styles.dashboard}>
      {
        userRole === 'admin' ? (
          <DashboardAdmin />
        ) : (
          <DashboardUser />
        )
      }
    </main>
  );
}
