import styles from './style.module.css';
import { Button, Modal } from '../index';

type DeleteUserModalProps = {
  errorMessage: string;
  successMessage: string;
  onSubmit: () => void
  onClose: () => void;
};
export function DeleteUserModal({ errorMessage, successMessage, onSubmit, onClose }: DeleteUserModalProps) {
  return (
    <Modal
      onClose={onClose}
      children={
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>Are you sure you want to delete user</h2>

          {errorMessage ? (
            <p className={styles.errorMessage}>{errorMessage}</p>
          ) : (
            <p className={styles.successMessage}>{successMessage}</p>
          )}
          {(errorMessage || successMessage ? <Button label={'Ok'} onClick={onClose} /> : <div className={styles.buttons}>
            <Button
              label={'Confirm'}
              onClick={onSubmit}
            />
            <Button
              label={'Cancel'}
              onClick={onClose}
            />
          </div>)}
        </div>
      }
    />
  );
}
