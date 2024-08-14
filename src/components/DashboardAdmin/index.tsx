import { useEffect, useState } from 'react';
import { Button, Input, Loader, UserList } from '../../components';
import { useDashborad } from '../../hooks';
import styles from './style.module.css';

export function DashboardAdmin() {

    const {
        searchTerm,
        users,
        handleSearchClick,
        getAllUsers
    } = useDashborad();

    const [loading, setLoading] = useState(true);
    const [word, setWord] = useState<string>('');

    useEffect(() => {
        getAllUsers(searchTerm)
        setLoading(false)
    }, [searchTerm])

    return (
        <div className={styles.content}>
            <h1>Dashboard Admin</h1>
            <form className={styles.form}>
                <Input
                    label={'Enter name, surname, email or country'}
                    type={'text'}
                    placeholder=' '
                    value={word}
                    handleOnChange={e => setWord(e.target.value)}
                />
                <Button
                    label={'Search'}
                    onClick={() => handleSearchClick(word)}
                    type='button'
                />
            </form>
            <div className={styles.listHeader}>
                <h2>User List</h2>
                <Button
                    label={'Add User'}
                    onClick={() => handleSearchClick(word)}
                    type='button'
                />
            </div>
            {
                loading ? (
                    <Loader />
                ) : (
                    <UserList users={users} />
                )
            }
        </ div>
    )
}