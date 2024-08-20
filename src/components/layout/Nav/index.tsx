import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { NavItem } from '../../index';
import {
  faRightFromBracket,
  faGaugeHigh,
} from '@fortawesome/free-solid-svg-icons';
import { useLogout } from '../../../hooks';

export function Nav() {
  const { handleLogout } = useLogout();

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
