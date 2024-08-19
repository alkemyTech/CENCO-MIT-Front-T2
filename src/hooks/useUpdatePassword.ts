import { useState } from 'react';
import { isPasswordValid } from '../validations';
import { arePasswordsEqual } from '../validations/arePasswordsEqual';
import { userServices } from '../services';

export function useUpdatePassword() {
  const token = sessionStorage.getItem('accessToken')!.toLocaleString();
  const id = sessionStorage.getItem('userId')!.toLocaleString();
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [modalUpdatePasswordOpen, setModalUpdatePasswordOpen] = useState(false);
  const [updatePasswordErrorMessage, setUpdatePasswordErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('')

  const openUpdatePasswordModal = () => {
    setModalUpdatePasswordOpen(true);
  };
  const closeUpdatePasswordModal = () => {
    setModalUpdatePasswordOpen(false);
  };

  const handleFieldChange = (field: string, event: React.ChangeEvent) => {
    setUpdatePasswordErrorMessage('');
    if (field === 'password') {
      setPassword((event.currentTarget as HTMLInputElement).value);
    } else if (field === 'new-password') {
      setNewPassword((event.currentTarget as HTMLInputElement).value);
    } else if (field === 'repeat-password') {
      setRepeatPassword((event.currentTarget as HTMLInputElement).value);
    }
  };

  const handleUpdatePasswordClick = async () => {
    let response: Response;
    try {
      if (!isPasswordValid(newPassword!)) {
        throw new Error('Password does not meet the requirements');
      }
      if (!arePasswordsEqual(newPassword!, repeatPassword!)) {
        throw new Error('New passwords must coincide');
      }
      const body = JSON.stringify({ password, newPassword });
      response = await userServices.updatePassword(token, id, body);
      const res = await response.json();

      if (response.ok) {
        setSuccessMessage('Password updated')
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      setUpdatePasswordErrorMessage(`${(error as Error).message}`);
    }
  };

  return {
    password,
    setPassword,
    newPassword,
    setNewPassword,
    repeatPassword,
    setRepeatPassword,
    modalUpdatePasswordOpen,
    setModalUpdatePasswordOpen,
    updatePasswordErrorMessage,
    successMessage,
    setUpdatePasswordErrorMessage,
    openUpdatePasswordModal,
    closeUpdatePasswordModal,
    handleFieldChange,
    handleUpdatePasswordClick,
  };
}
