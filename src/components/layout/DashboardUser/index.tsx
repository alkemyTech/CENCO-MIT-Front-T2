import styles from './style.module.css';
import { useEffect, useState } from 'react';
import {
  Button,
  CardInfoUser,
  CardContact,
  ProfilePicture,
  EditProfileModal,
} from '../../index';
import { userServices } from '../../../services';
import { useNavigate } from 'react-router-dom';
import {
  isTokenExpired,
  isNameValid,
  isPhoneValid,
} from '../../../validations';
import { useLogout } from '../../../hooks';

export function DashboardUser() {
  const navigate = useNavigate();
  const { handleLogout } = useLogout();
  const [token, setToken] = useState('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [rut, setRut] = useState<string>('');

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (!token || isTokenExpired(token)) {
      handleLogout();
      navigate('/');
    }
    setToken(token!);

    const getUserInfo = async () => {
      const response = await userServices.getInfo(token!.toLocaleString());
      if (!response.ok)
        throw new Error('Error al obtener la información del usuario');
      const data = await response.json();
      setUserId(data.id);
      setName(data.name);
      setSurname(data.surname);
      setPhone(data.phone);
      setCountry(data.country);
      setEmail(data.email);
      setRut(data.rut);
    };

    try {
      getUserInfo();
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error);
    }
  }, [handleLogout, navigate]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!userId) {
      alert('No se pudo verificar la identidad del usuario.');
      return;
    }

    if (!isNameValid(name)) {
      alert('El nombre solo puede contener letras, espacios y apóstrofes.');
      return;
    }

    if (!isNameValid(surname)) {
      alert('El apellido solo puede contener letras, espacios y apóstrofes.');
      return;
    }

    if (!isPhoneValid(phone)) {
      alert('El teléfono solo puede contener números.');
      return;
    }

    const updatedUser = { name, surname, phone, country };
    const body = JSON.stringify(updatedUser)
    try {
      const response = await userServices.update(token, userId, body)
      if (!response.ok) {
        throw new Error('Error al actualizar el perfil');
      }

      const result = await response.json();
      console.log('Perfil actualizado con éxito:', result);

      handleCloseModal();
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      alert('Hubo un problema al actualizar tu perfil. Intenta de nuevo.');
    }
  };

  return (
    <div>
      <div className={styles.pictureSection}>
        <ProfilePicture />
        <h1>¡Hola de nuevo!</h1>
      </div>
      <div className={styles.personalInfoContainer}>
        <CardInfoUser
          name={name}
          surname={surname}
          rut={rut}
          country={country}
        />
        <CardContact phone={phone} email={email} />
      </div>
      <div>
        <p>Aquí puedes editar tu información personal</p>
        <br />
        <p>
          <Button
            label={'Editar'}
            onClick={handleOpenModal}
          />
        </p>
      </div>
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        name={name}
        surname={surname}
        phone={phone}
        pais={country}
        setName={setName}
        setSurname={setSurname}
        setPhone={setPhone}
        setPais={setCountry}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
