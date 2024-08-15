import styles from './style.module.css';

type ButtonProps = {
  label: string;
  onClick: () => void;
  type?: 'submit' | 'reset' | 'button';
};

export function Button({ label, onClick, type }: ButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type={type || 'button'}
      aria-label={`${label} button`}
    >
      {label}
    </button>
  );
}
