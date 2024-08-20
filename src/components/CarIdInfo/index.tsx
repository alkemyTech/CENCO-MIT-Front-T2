import styles from "./style.module.css";

interface CardInfoUserProps {
  name: string;
  surname: string;
  phone: string;
  rut?: string;
  pais?: string;
}

export function CardInfoUser({
  name,
  surname,
  phone,
  rut,
  pais,
}: CardInfoUserProps) {
  return (
    <main className={styles.container}>
      <h2>Información de usuario</h2>
      <p>
        <strong>Nombre:</strong> {name}
      </p>
      <p>
        <strong>Apellido:</strong> {surname}
      </p>
      <p>
        <strong>Teléfono:</strong> {phone}
      </p>
      <p>
        <strong>RUT:</strong> {rut}
      </p>
      <p>
        <strong>País:</strong> {pais}
      </p>
    </main>
  );
}
