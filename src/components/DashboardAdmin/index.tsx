import { useEffect, useState } from 'react';
import { Button, Input, Loader, UserList } from '../../components';
import RegisterModal from '../../components/Modal/RegisterModal';
import { useDashborad } from '../../hooks';
import styles from './style.module.css';

export function DashboardAdmin() {
  const { searchTerm, users, handleSearchClick, getAllUsers } = useDashborad();

  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  useEffect(() => {
    getAllUsers(searchTerm);
    setLoading(false);
  }, [searchTerm]);

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
      <h1>Dashboard Admin</h1>
      <form className={styles.form}>
        <Input
          label={'Enter name, surname, email or country'}
          type={'text'}
          placeholder=" "
          value={word}
          handleOnChange={(e) => setWord(e.target.value)}
        />
        <Button
          label={'Search'}
          onClick={() => handleSearchClick(word)}
          type="button"
        />
      </form>
      <div className={styles.listHeader}>
        <h2>User List</h2>
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
