import { useEffect, useState } from 'react';
import { Loader } from '..';
import styles from './style.module.css';
import { userServices } from '../../services';
import { useNavigate } from 'react-router-dom';
import { User } from '../../interfaces/User';
import { isTokenExpired } from '../../validations';

export function DashboardUser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<Partial<User>>({
    name: '',
  });

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken')!
    if (!token) navigate('/');
    if(isTokenExpired(token)) navigate('/');
    const data = async () => {
      const response = await userServices.getInfo(token.toLocaleString());
      setInfo(await response.json());
    };
    data();
    setLoading(false);
  }, [navigate]);

  return (
    <div className={styles.content}>
      <h1 className={styles.h1}>Dashboard User</h1>
      {loading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <h2 className={styles.h2}>
          Hello, {info!.name} {info!.surname}
        </h2>
      )}
    </div>
  );
}
