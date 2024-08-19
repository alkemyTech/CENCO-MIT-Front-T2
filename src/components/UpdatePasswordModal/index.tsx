import styles from './style.module.css';
import { Modal } from '../Modal';
import { PasswordInput } from '../PasswordInput';
import { useUpdatePassword } from '../../hooks/useUpdatePassword';
import { Button } from '../Button';

export function UpdatePasswordModal() {
  const {
    password,
    newPassword,
    repeatPassword,
    updatePasswordErrorMessage,
    handleFieldChange,
    handleUpdatePasswordClick,
  } = useUpdatePassword();

  return (
    <Modal
      children={
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>Update your password</h2>
          <PasswordInput
            label={'Password'}
            value={password}
            onChange={e => handleFieldChange('password', e)}
          />
          <PasswordInput
            label={'New Password'}
            value={newPassword}
            onChange={e => handleFieldChange('new-password', e)}
          />
          <PasswordInput
            label={'Repeat New Password'}
            value={repeatPassword}
            onChange={e => handleFieldChange('repeat-password', e)}
          />
          <p className={styles.errorMessage}>
            {updatePasswordErrorMessage && ''}
          </p>
          <Button
            label={'Change password'}
            onClick={handleUpdatePasswordClick}
          />
        </div>
      }
    />
  );
}
