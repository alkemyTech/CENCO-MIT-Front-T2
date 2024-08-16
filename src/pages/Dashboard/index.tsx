import { DashboardUser } from "../../components/DashboardUser";
import styles from "./style.module.css";

const userRole = sessionStorage.getItem("userRole")?.toLocaleString();
export function Dashboard() {
  return (
    <main className={styles.dashboard}>
      {userRole === "user" ? (
        <DashboardUser />
      ) : (
        <h1>This is the dashboard admin view</h1>
      )}
    </main>
  );
}
