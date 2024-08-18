import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { Modal, Button, CardInfoUser, CardContact, ProfilePicture } from "../index";
import { isNameValid, isPhoneValid } from '../../validations';
export function DashboardUser() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [pais, setPais] = useState<string>("");
  
  const token = sessionStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      const fetchUserData = async () => {
        try {
          
          const response = await fetch(`/api/users/${userId}/info`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error('Error al obtener la información del usuario');
          }

          const data = await response.json();

         
          setUserId(data.id);
          setName(data.name);
          setSurname(data.surname);
          setPhone(data.phone);
          setPais(data.pais);

        } catch (error) {
          console.error("Error al obtener la información del usuario:", error);
        }
      };

      fetchUserData();
    } else {
      console.error("No se encontró un token válido en el sessionStorage.");
    }
  }, [token]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!userId || !token) {
      alert("No se pudo verificar la identidad del usuario.");
      return;
    }

    
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

    const updatedUser = { name, surname, phone, pais };

    try {
      
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el perfil');
      }

      const result = await response.json();

      console.log("Perfil actualizado con éxito:", result);
      handleCloseModal();

    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      alert("Hubo un problema al actualizar tu perfil. Intenta de nuevo.");
    }
  };

  return (
    <main className={styles.dashboard}>
      <div className={styles.pictureSection}>
        <ProfilePicture />
        <h1>¡Hola de nuevo!</h1>
      </div>
      <div className={styles.personalInfoContainer}>
        <CardInfoUser name={name} surname={surname} phone={phone} />
        <CardContact phone={phone} />
      </div>
      <div>
        <p>Aquí puedes editar tu información personal</p>
        <br />
        <p>
          <Button label={"Editar"} onClick={handleOpenModal} />
        </p>
      </div>

     ({isModalOpen && <Modal onClose={handleCloseModal}>
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
            <input
              type="text"
              name="pais"
              placeholder="Nuevo País"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
            <br />
            <Button label={"Guardar Cambios"} type="submit" />
          </form>
        </div>
      </Modal>
      }) 
    </main>
  );
}
