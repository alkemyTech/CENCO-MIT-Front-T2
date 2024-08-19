import { useEffect, useState } from 'react';
import { Button, Input, Loader, UserList } from '..';
import RegisterModal from '../Modal/RegisterModal';
import EditUserModal from '../../components/Modal/EditUserModal';
import { useDashboard } from '../../hooks';
import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from '../../validations';
import { useLogout } from '../../hooks/useLogout';
import { User } from '../../interfaces/User';

export function DashboardAdmin() {
  const navigate = useNavigate();
  const { searchTerm, users, handleSearchClick, getAllUsers } = useDashboard();
  const { handleLogout } = useLogout();

  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState<string>('');
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // Estado para controlar el modal de registro
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para controlar el modal de edición
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // Usuario seleccionado para editar

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (!token || isTokenExpired(token)) {
      handleLogout();
      navigate('/')
    }

    getAllUsers(searchTerm);
    setLoading(false);
  }, [navigate, searchTerm]);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const openEditModal = (user: User) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedUser(null);
  };

  const handleUserRegistered = () => {
    getAllUsers(''); // Refresca la lista de usuarios después del registro exitoso
    closeRegisterModal(); // Cierra el modal de registro
  };

  const handleUserUpdated = () => {
    getAllUsers(''); // Refresca la lista de usuarios después de la edición
    closeEditModal(); // Cierra el modal de edición
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
        <Button label={'Add User'} onClick={openRegisterModal} type="button" />
      </div>
      {loading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <UserList users={users} onEditClick={openEditModal} /> // Pasa la función de apertura del modal de edición
      )}

      {isRegisterModalOpen && (
        <RegisterModal
          onClose={closeRegisterModal}
          onUserRegistered={handleUserRegistered}
        />
      )}

      {isEditModalOpen && selectedUser && (
        <EditUserModal
          user={{
            ...selectedUser,
            phone: selectedUser.phone.toString(),
          }}
          onClose={closeEditModal}
          onUserUpdated={handleUserUpdated}
        />
      )}
    </div>
  );
}
