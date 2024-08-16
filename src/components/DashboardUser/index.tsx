import Button from "../Button";
import { CardInfoUser } from "../CarIdInfo";
import { CardContact } from "../ContactUser/Index";
import ProfilePicture from "../ProfilePicture/Index";
import Modal from "../Modal";
import styles from "./style.module.css";
import { useState } from "react";

export function DashboardUser() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className={styles.dashboard}>
      <div className={styles.pictureSection}>
        <ProfilePicture />
        <h1>¡Hola de nuevo!</h1>
      </div>
      <div className={styles.personalInfoContainer}>
        <CardInfoUser />
        <CardContact />
      </div>
      <div>
        <p>Aquí puedes editar tu información personal</p>
        <br />
        <p>
          <Button label={"Editar"} onClick={handleOpenModal} />
        </p>
      </div>

      
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className={styles.modalContent}>
        <h2>Editar Perfil</h2>
<form>
    <div>Nuevo Nombre:</div>
    <input type="text" name="name" placeholder="Nuevo Nombre" />

    <div>Nuevo Apellido:</div>
    <input type="text" name="surname" placeholder="Nuevo Apellido" />
    <div>Nuevo telefono:</div>
    <input type="tel" name="pais" placeholder="Nuevo Telefono" />

    <div>Nuevo País:</div>
    <input type="text" name="pais" placeholder="Nuevo País" />
</form>
<br/>
          <Button
            label={"Guardar Cambios"}
            onClick={() => {
              console.log("clic guardar");
              handleCloseModal();
            }}
          />
        </div>
      </Modal>
    </main>
  );
}
