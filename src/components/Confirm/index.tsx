import { FC, ReactNode } from 'react';
import styles from './style.module.css';

type NotificationProps = {
  message: string;
  onClose: () => void;
  children?: ReactNode;
};

export const Confirm: FC<NotificationProps> = ({
  message,
  onClose,
  children,
}) => {
  return (
    <div className={styles.notification}>
      <p>{message}</p>
      {children && <div>{children}</div>}{' '}
      {/* Renderizar los children si existen */}
      {!children && <button onClick={onClose}>OK</button>}{' '}
      {/* Renderizar el botón "OK" si no hay children */}
    </div>
  );
};
