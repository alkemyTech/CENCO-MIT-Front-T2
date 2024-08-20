import styles from './style.module.css';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  icon?: IconDefinition;
  style?: React.CSSProperties;
};

export function Button({ label, onClick, type, icon, style }: ButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type={type || 'button'}
      aria-label={`${label} button`}
      style={style}
    >
      {label} {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
}
