import React, { useState } from "react";
import Button from "../Button";
import { CardInfoUser } from "../CarIdInfo";
import { CardContact } from "../ContactUser/Index";
import ProfilePicture from "../ProfilePicture/Index";
import Modal from "../Modal";
import styles from "./style.module.css";
import { isNameValid } from "../../Validations/isNameValid";
import { isPhoneValid } from "../../Validations/isPhoneValid";

export function DashboardUser() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!isNameValid(name)) {
      alert("El nombre solo puede contener letras, espacios y apóstrofes.");
      return;
    }

    if (!isNameValid(surname)) {
      alert("El apellido solo puede contener letras, espacios y apóstrofes.");
      return;
    }

    if (!isPhoneValid(phone)) {
      alert("El teléfono solo puede contener números.");
      return;
    }

    console.log("Formulario enviado:", { name, surname, phone });
    handleCloseModal();
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
          <form onSubmit={handleSubmit}>
            <div>Nuevo Nombre:</div>
            <input
              type="text"
              name="name"
              placeholder="Nuevo Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div>Nuevo Apellido:</div>
            <input
              type="text"
              name="surname"
              placeholder="Nuevo Apellido"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />

            <div>Nuevo Teléfono:</div>
            <input
              type="tel"
              name="phone"
              placeholder="Nuevo Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <div>Nuevo País:</div>
            <input type="text" name="pais" placeholder="Nuevo País" />
            <br />
            <Button label={"Guardar Cambios"} type="submit" />
          </form>
        </div>
      </Modal>
    </main>
  );
}
