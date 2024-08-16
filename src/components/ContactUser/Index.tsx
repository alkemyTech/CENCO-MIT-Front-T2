import styles from "../ContactUser/style.module.css";

export function CardContact() {
  return (
    <main className={styles.container}>
        <h2> Datos de contacto </h2>
      <p>
        <strong>Telefono: </strong> (+44) 20 7183 4567
      </p>
      <p>
        <strong>Correo Electronico:</strong> hermione.granger@hogwarts.edus
      </p>
    </main>
  );
}
