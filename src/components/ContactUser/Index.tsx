import styles from "../ContactUser/style.module.css";

interface CardContactProps {
  phone: string;
  email?: string; 
}

export function CardContact({ phone, email }: CardContactProps) {
  return (
    <main className={styles.container}>
      <h2>Datos de contacto</h2>
      <p>
        <strong>Teléfono:</strong> {phone}
      </p>
      <p>
        <strong>Correo Electrónico:</strong> {email}
      </p>
    </main>
  );
}