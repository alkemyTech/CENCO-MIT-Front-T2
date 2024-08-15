import styles from './style.module.css';
import avatar from '../../assets/img/default-avatar-profile.jpg';
import { Button } from '../../components';
import { User } from '../../interfaces/User';

type Props = {
    user: User
}

export function UserCard({ user }: Props) {
    const status = !user.deletedDate ? styles.cardActive : styles.cardInactive
    return (
        <div className={status}>
            <div className={styles.picture}>
                <img className={styles.avatar} src={avatar} alt='avatar' />
                <h2 className={styles.role}>{user.role}</h2>
            </div>
            <div className={styles.info}>
                <div className={styles.cardHeader}>
                    <div>
                        <h3>{user.name} {user.surname}</h3>
                        <h4>{user.id}</h4>
                    </div>
                    {
                        !user.deletedDate ?
                            (<div className={styles.buttons}>
                                <Button
                                    label={'Edit'}
                                    onClick={() => alert('Editar Usuario!')}
                                    type='submit'
                                />
                                <div className={styles.spacer} />
                                <Button
                                    label={'Delete'}
                                    onClick={() => alert('Eliminar usuario!')}
                                    type='submit'
                                />
                            </div>
                            ) :
                            <p className={styles.inactive}>Inactive User</p>
                    }
                </div>
                <div className={styles.underline}></div>
                <h5>Rut: {user.rut}</h5>
                <h5>Email: {user.email}</h5>
                <h5>Phone: {user.phone}</h5>
                <h5>Country: {user.country}</h5>
                {
                    user.deletedDate &&
                    (<h5>Deleted at: {new Date(user.deletedDate).toLocaleDateString('es-ES')}</h5>)
                }
            </div>

        </ div>
    )
}