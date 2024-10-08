import styles from './style.module.css';
import { User } from '../../../interfaces/User';
import { UserCard } from '../..';

type UserListProps = {
  users: User[];
  onEditClick: (user: User) => void; // Callback para manejar la edición de usuarios
  onDeleteClick: (id: string) => void;
};

export function UserList({ users, onEditClick, onDeleteClick }: UserListProps) {
  const sortedUsers = users.sort((a, b) => {
    return (b.deletedDate ? 0 : 1) - (a.deletedDate ? 0 : 1);
  });

  return (
    <div className={styles.list}>
      {sortedUsers.map((user, index) => {
        return <UserCard user={user} key={index} onEditClick={onEditClick} admin={true} onDeleteClick={() => onDeleteClick(user.id)}/>;
      })}
    </div>
  );
}
