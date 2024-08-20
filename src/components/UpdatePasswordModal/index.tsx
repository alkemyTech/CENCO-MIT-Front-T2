import styles from './style.module.css';
import { useUpdatePassword } from '../../hooks';
import { Button, Modal, PasswordInput } from '../index';

type UpdatePsswordModalProps = {
  onClose: () => void;
};
export function UpdatePasswordModal({ onClose }: UpdatePsswordModalProps) {
  const {
    password,
    newPassword,
    repeatPassword,
    successMessage,
    updatePasswordErrorMessage,
    handleFieldChange,
    handleUpdatePasswordClick,
  } = useUpdatePassword();

  return (
    <Modal
      onClose={onClose}
      children={
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>Update your password</h2>
          <PasswordInput
            label={'Password'}
            value={password!}
            placeholder={' '}
            onChange={e => handleFieldChange('password', e)}
          />
          <PasswordInput
            label={'New Password'}
            value={newPassword!}
            placeholder={' '}
            onChange={e => handleFieldChange('new-password', e)}
          />
          <PasswordInput
            label={'Repeat New Password'}
            value={repeatPassword!}
            placeholder={' '}
            onChange={e => handleFieldChange('repeat-password', e)}
          />
          {updatePasswordErrorMessage ? (
            <p className={styles.errorMessage}>{updatePasswordErrorMessage}</p>
          ) : (
            <p className={styles.successMessage}>{successMessage}</p>
          )}
          <Button
            label={'Change password'}
            onClick={handleUpdatePasswordClick}
          />
        </div>
      }
    />
  );
}
