import React from 'react';
import styles from './style.module.css';

type NotificationProps = {
  message: string;
  onClose: () => void;
};

export const Notification: React.FC<NotificationProps> = ({
  message,
  onClose,
}) => {
  return (
    <div className={styles.notification}>
      <p>{message}</p>
      <button onClick={onClose}>OK</button>
    </div>
  );
};
