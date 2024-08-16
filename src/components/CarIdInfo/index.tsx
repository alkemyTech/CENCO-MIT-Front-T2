import styles from "./style.module.css";

export function CardInfoUser() {
  return (
    <main className={styles.container}>
        <h2>Informacion de usuario</h2>
        <p>
          <strong>Nombre:</strong> Hermione
        </p>
        <p>
          <strong>Apellido:</strong> Granger
        </p>
        <p>
          <strong>RUT:</strong> 12.345.678-9
        </p>
        <p>
          <strong>País:</strong> Reino Unido
          </p>
    </main>
  );
}
