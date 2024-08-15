import styles from './style.module.css';
import { User } from '../../interfaces/User';
import { UserCard } from '../index';

export function UserList({ users }: { users: User[] }) {
    const sortedUsers = users.sort((a, b) => {
        return (b.deletedDate ? 0 : 1) - (a.deletedDate ? 0 : 1)
    });

    return (
        <div className={styles.list}>
            {sortedUsers.map((user) => {
                return <UserCard user={user} />
            })}
        </div>
    )
}