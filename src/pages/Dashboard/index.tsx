import styles from "./style.module.css";
import { DashboardUser } from "../../components/DashboardUser";
import { DashboardAdmin } from '../../components';

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
