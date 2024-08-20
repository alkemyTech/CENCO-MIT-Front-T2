import styles from "./style.module.css";

interface ModalProps {
  children: string | JSX.Element | JSX.Element[];
  onClose?: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
  return (
    <>
      <div className={styles.modalOverlay} onClick={onClose}></div>{' '}
      <div className={styles.modal}>
        <div className={styles.wrapper}>
          {onClose && (
            <span className={styles.closeButton} onClick={onClose}>
              &times;
            </span>
          )}
          {children}
        </div>
      </div>
    </>
  );
}
