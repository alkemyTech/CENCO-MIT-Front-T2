import { Link } from 'react-router-dom'
import styles from './style.module.css'

type NavItemProps = {
  label: string,
  route: string
}

export function NavItem({label, route}: NavItemProps) {
  return (
    <Link to={route}>
    <li
      className={styles.listItem}>
      {label}
    </li>
    </Link>
  )
}