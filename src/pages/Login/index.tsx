import styles from './style.module.css';
import { Button, Input, PasswordInput } from '../../components';
import { useLogin } from '../../hooks';

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
        <PasswordInput
          label={'Enter your password'}
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
