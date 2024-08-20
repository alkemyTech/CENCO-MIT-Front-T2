import styles from "./style.module.css";

interface CardInfoUserProps {
  name: string;
  surname: string;
  rut: string;
  country: string;
}

export function CardInfoUser({
  name,
  surname,
  rut,
  country
}: CardInfoUserProps) {
  return (
    <main className={styles.container}>
      <h2>User information</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Surname:</strong> {surname}
      </p>
      <p>
        <strong>RUT:</strong> {rut}
      </p>
      <p>
        <strong>Country:</strong> {country}
      </p>
    </main>
  );
}
