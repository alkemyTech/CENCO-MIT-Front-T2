import { Link } from 'react-router-dom';
import { NavItem } from '../NavItem';
import styles from './style.module.css';
import { faRightFromBracket, faUser, faGaugeHigh} from '@fortawesome/free-solid-svg-icons';

export function Nav() {
  const isAdmin = sessionStorage.getItem('userRole')?.toString() === 'admin';

  return (
    <nav className={styles.nav}>
      <Link to={'/home'} className={styles.title}>
      <h1>
        <span>Talent</span>Manager
      </h1>
      </Link>

      <ul className={styles.list}>
        {isAdmin && (
          <NavItem
            label={'Dashboard'}
            route={'/dashboard'}
            icon={faGaugeHigh}
          />
        )}
        <NavItem
          label={'Profile'}
          route={'/profile'}
          icon={faUser}
        />
        <NavItem
          label={'Logout'}
          route={'/'}
          icon={faRightFromBracket}
        />
      </ul>
    </nav>
  );
}
