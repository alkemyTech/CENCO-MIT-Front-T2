import { useState } from 'react';
import styles from './style.module.css';
import RegisterModal from '../../components/Modal/RegisterModal';

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userName = sessionStorage.getItem('userName')?.toLocaleString();
  const userSurname = sessionStorage.getItem('userSurname')?.toLocaleString();
  const userRole = sessionStorage.getItem('userRole')?.toLocaleString();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className={styles.home}>
      <h1>This is the home view</h1>
      <h2>{`Hello ${userName} ${userSurname}`}</h2>
      <h2>{`Your role is ${userRole}`}</h2>

      {/* Button to open the modal */}
      <button onClick={openModal} className={styles.openModalButton}>
        Register New User
      </button>

      {/* Render the modal if isModalOpen is true*/}
      {isModalOpen && <RegisterModal onClose={closeModal} />}
    </main>
  );
}
