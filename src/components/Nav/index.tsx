import { Link } from 'react-router-dom';
import { NavItem } from '../NavItem';
import styles from './style.module.css';

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
          />
        )}
        <NavItem
          label={'Profile'}
          route={'/profile'}
        />
        <NavItem
          label={'Logout'}
          route={'/'}
        />
      </ul>
    </nav>
  );
}
