import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type NavItemProps = {
  label: string;
  route: string;
  icon?: IconDefinition;
};

export function NavItem({ label, route, icon }: NavItemProps) {
  return (
    <Link to={route} className={styles.link}>
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon}/>}
      <li className={styles.listItem}>{label}</li>
    </Link>
  );
}
