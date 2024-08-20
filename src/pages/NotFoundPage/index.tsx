import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import img404 from '../../assets/img/img404.png';
import error404 from '../../assets/img/notFound.png';
import { Button } from '../../components';

export function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <main className={styles.content}>
      <div className={styles.notFound}>
        <img
          className={styles.err}
          src={error404}
          alt='error404'
        />
        <img
          className={styles.img}
          src={img404}
          alt='image404'
        />
      </div>
      <Button
        label='GO BACK'
        onClick={handleClick}
      />
    </main>
  );
}
