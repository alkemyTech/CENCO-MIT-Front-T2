import styles from './style.module.css';

type InputProps = {
  label: string;
  type: string; // can be text, email, password, number, etc.
  placeholder?: string; // optional
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // optional
};

export default function Input({ label, type, placeholder, handleOnChange }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <input
        type={type}
        className={styles.content + styles.input}
        id={`${label}-input`}
        name={`${label}-input`}
        onChange={handleOnChange}
        placeholder={placeholder}
        aria-label={`${label} input`}
      />
      <label className={styles.label} htmlFor={`${label}-input`}>{label}</label>
    </div>
  );
}