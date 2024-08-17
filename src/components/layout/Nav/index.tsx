import { Link } from 'react-router-dom';
import { NavItem } from '../NavItem';
import styles from './style.module.css';
import {
  faRightFromBracket,
  faGaugeHigh,
} from '@fortawesome/free-solid-svg-icons';

export function Nav() {
  
  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userSurname');
    sessionStorage.removeItem('userRole');
  }

  return (
    <nav className={styles.nav}>
      <Link
        to={'/dashboard'}
        className={styles.title}
      >
        <h1>
          <span>Talent</span>Manager
        </h1>
      </Link>
      <ul className={styles.list}>
        <NavItem
          label={'Dashboard'}
          route={'/dashboard'}
          icon={faGaugeHigh}
        />
        <NavItem
          label={'Logout'}
          route={'/'}
          icon={faRightFromBracket}
          onClick={handleLogout}
        />
      </ul>
    </nav>
  );
}
