import styles from './style.module.css';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useLogin } from './useLogin';

export function Login() {
  const { formData, handleFieldChange, errorLabel, handleLoginClick } =
    useLogin();

  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <h1>Talent Manager</h1>
        <h4>User management made simple.</h4>
        <Input
          label={'Enter your email'}
          type={'email'}
          placeholder=' '
          value={formData.email}
          handleOnChange={e => handleFieldChange('email', e)}
        />
        <Input
          label={'Enter your password'}
          type={'password'}
          placeholder=' '
          value={formData.password}
          handleOnChange={e => handleFieldChange('password', e)}
        />
        <label className={styles.labelErrorLogin}>{errorLabel}</label>
        <Button
          label={'Login'}
          onClick={handleLoginClick}
          type='button'
        />
      </form>
    </main>
  );
}
