import styles from './style.module.css';

type InputProps = {
  label: string;
  type: string; // can be text, email, password, number, etc.
  value:string;
  placeholder?: string; // optional
  className?: string;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // optional
};

export function Input({ label, type, value, placeholder, className, handleOnChange }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <input
        type={type}
        className={className}
        id={`${label}-input`}
        name={`${label}-input`}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        aria-label={`${label} input`}
        autoComplete="new-password"
        
      />
      <label className={styles.label} htmlFor={`${label}-input`}>{label}</label>
    </div>
  );
}