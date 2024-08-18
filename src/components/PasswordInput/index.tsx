import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type InputProps = {
  label: string;
  value:string;
  placeholder?: string; // optional
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // optional
};

export function PasswordInput({ label, value, placeholder, handleOnChange }: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      <input
        type={showPassword ? "text" : "password"}
        className={styles.content + styles.input}
        id={`${label}-input`}
        name={`${label}-input`}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        aria-label={`${label} input`}
        autoComplete="new-password"
      />
      <span className={styles.icon}>
        {
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={() => setShowPassword(!showPassword)}
          />
        }
      </span>
      <label className={styles.label} htmlFor={`${label}-input`}>{label}</label>
      
    </div>
  );
}