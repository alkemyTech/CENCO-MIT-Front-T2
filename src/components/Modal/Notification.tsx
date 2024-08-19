import React from 'react';
import styles from './style.module.css';
import { Button } from '../Button';

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
      <Button onClick={onClose} label={'OK'} />
    </div>
  );
};
