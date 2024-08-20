import styles from './style.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCard, EditUserModal, Loader, UpdatePasswordModal } from '../..';
import { userServices } from '../../../services';
import { useLogout, useUpdatePassword } from '../../../hooks';
import { isTokenExpired } from '../../../validations';
import { User } from '../../../interfaces/User';

export function DashboardUser() {
  const navigate = useNavigate();
  const { handleLogout } = useLogout();
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {
    modalUpdatePasswordOpen,
    openUpdatePasswordModal,
    closeUpdatePasswordModal,
  } = useUpdatePassword();
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    surname: '',
    rut: '',
    email: '',
    country: '',
    role: 'user',
    deletedDate: new Date(),
    phone: 0,
  });

  const getUserInfo = async (token:string) => {
    const response = await userServices.getInfo(token.toLocaleString());
    if (!response.ok)
      throw new Error('Error al obtener la información del usuario');
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (!token || isTokenExpired(token)) {
      handleLogout();
      navigate('/');
    }

    try {
      getUserInfo(token!);
      setLoading(false);
    } catch (error) {
      console.error((error as Error).message);
    }
    
  },[navigate]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUserUpdated = () => {
    handleCloseModal();
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.h1}>Your Information</h1>
      {loading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <UserCard
          user={user!}
          onEditClick={handleOpenModal}
          admin={false}
          onUpdatePasswordClick={openUpdatePasswordModal}
        />
      )}
      {isModalOpen && (
        <EditUserModal
          user={{ ...user, phone: user.phone.toString() }}
          onClose={handleCloseModal}
          onUserUpdated={handleUserUpdated}
        />
      )}
      {modalUpdatePasswordOpen && (
        <UpdatePasswordModal onClose={closeUpdatePasswordModal} />
      )}
    </div>
  );
}
