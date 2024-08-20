import { useState } from 'react';
import { userServices } from '../services';

export function useDeleteUser() {
  const token = sessionStorage.getItem('accessToken')!.toLocaleString();
  const [userId, setUserId] = useState('');
  const [modalDeleteUserOpen, setModalDeleteUserOpen] = useState(false);
  const [deleteUserErrorMessage, setDeleteUserErrorMessage] =
    useState<string>('');
  const [deleteUserSuccessMessage, setDeleteUserSuccessMessage] =
    useState<string>('');

  const openDeleteUserModal = (userId: string) => {
    setUserId(userId);
    setDeleteUserErrorMessage('');
    setDeleteUserSuccessMessage('');
    setModalDeleteUserOpen(true);
  };
  const closeDeleteUserModal = () => {

    setModalDeleteUserOpen(false);
  };

  const handleConfirmDeleteClick = async (getUsers: () => Promise<void>) => {
    let response: Response;
    console.log({userId}, {token})
    try {
      response = await userServices.delete(token, userId);
      
      const res = await response.json();

      if (response.ok) {
        setDeleteUserSuccessMessage('User deleted successfully.');
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      setDeleteUserErrorMessage(`${(error as Error).message}`);
    }
    getUsers();
  };

  return {
    setUserId,
    modalDeleteUserOpen,
    deleteUserErrorMessage,
    deleteUserSuccessMessage,
    openDeleteUserModal,
    closeDeleteUserModal,
    handleConfirmDeleteClick
  };
}
