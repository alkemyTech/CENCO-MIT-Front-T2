import styles from './style.module.css';
import { faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import avatarAdmin from '/src/assets/img/avatarAdminB.png';
import avatarUser from '/src/assets/img/avatarUserB.png';
import { Button } from '../..';
import { User } from '../../../interfaces/User';

type Props = {
  user: User;
  onEditClick: (user: User) => void; // Callback para manejar el clic en el botón de edición
  admin?: boolean;
  onUpdatePasswordClick?: () => void;
  onDeleteClick?: () => void;
};

export function UserCard({ user, onEditClick, admin, onUpdatePasswordClick, onDeleteClick }: Props) {
    const status = !user.deletedDate ? styles.cardActive : styles.cardInactive;
  const avatar = user.role === 'admin' ? avatarAdmin : avatarUser;

  return (
    <div className={status}>
      <div className={styles.picture}>
        <img
          className={styles.avatar}
          src={avatar}
          alt='avatar'
        />
        <h2 className={styles.role}>{user.role}</h2>
      </div>
      <div className={styles.info}>
        <div className={styles.cardHeader}>
          <h3 className={styles.h3}>
            {user.name} {user.surname}
          </h3>
          {!user.deletedDate ? (
            <div className={styles.buttons}>
              <Button
                label='Edit User'
                onClick={() => onEditClick(user)}
                type='submit'
                icon={faUserPen}
              />
              <div className={styles.spacer} />
              {admin ? (
                <Button
                  label='Delete'
                  onClick={onDeleteClick}
                  type='submit'
                  icon={faTrash}
                  style={{ background: 'red' }}
                />
              ) : (
                <Button
                  label='Edit Password'
                  onClick={onUpdatePasswordClick}
                  type='submit'
                  icon={faUserPen}
                />
              )}
            </div>
          ) : (
            <p className={styles.inactive}>Inactive User</p>
          )}
        </div>
        <h4 className={styles.h4}>{user.id}</h4>
        <div className={styles.underline}></div>
        <h5 className={styles.h5}>Rut: {user.rut}</h5>
        <h5 className={styles.h5}>Email: {user.email}</h5>
        <h5 className={styles.h5}>Phone: {user.phone}</h5>
        <h5 className={styles.h5}>Country: {user.country}</h5>
        {user.deletedDate && (
          <h5 className={styles.h5}>
            Deleted at: {new Date(user.deletedDate).toLocaleDateString('es-ES')}
          </h5>
        )}
      </div>
    </div>
  );
}
