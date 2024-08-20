import styles from "./style.module.css";

interface CardContactProps {
  phone: string;
  email: string; 
}

export function CardContact({ phone, email }: CardContactProps) {
  return (
    <main className={styles.container}>
      <h2>Datos de contacto</h2>
      <p>
        <strong>Phone number:</strong> {phone}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
    </main>
  );
}