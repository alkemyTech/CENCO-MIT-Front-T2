import { useEffect, useState } from 'react';
import { Button, Input, Loader, UserList } from '..';
import RegisterModal from '../Modal/RegisterModal';
import { useDashboard } from '../../hooks';
import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from '../../validations';
import { useLogout } from '../../hooks/useLogout';

export function DashboardAdmin() {
  const navigate = useNavigate();
  const { searchTerm, users, handleSearchClick, getAllUsers } = useDashboard();
  const { handleLogout } = useLogout();

  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (!token || isTokenExpired(token)) {
      handleLogout();
      navigate('/')
    }

    getAllUsers(searchTerm);
    setLoading(false);
  }, [navigate, searchTerm]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUserRegistered = () => {
    getAllUsers(''); // Refresca la lista de usuarios después del registro exitoso
    closeModal(); // Cierra el modal
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.h1}>Your Dashboard</h1>
      <form className={styles.form}>
        <Input
          label={'Enter name, surname, email or country'}
          type={'text'}
          placeholder=" "
          value={word}
          handleOnChange={(e) => setWord(e.target.value)}
          className={styles.input}
        />
        <Button
          label={'Search'}
          onClick={() => handleSearchClick(word)}
          type="button"
        />
      </form>
      <div className={styles.listHeader}>
        <h2 className={styles.h2}>User List</h2>
        <Button label={'Add User'} onClick={openModal} type="button" />
      </div>
      {loading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <UserList users={users} />
      )}

      {isModalOpen && (
        <RegisterModal
          onClose={closeModal}
          onUserRegistered={handleUserRegistered}
        />
      )}
    </div>
  );
}
