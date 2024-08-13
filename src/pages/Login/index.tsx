import styles from './style.module.css';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Login() {
  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <h1>Bootcamp User ADM</h1>
        <h4>User management made simple.</h4>
        <Input
          label={'Enter your email'}
          type={'email'}
          placeholder=' '
          handleOnChange={e => console.log(e.target.value)}
        />
        <Input
          label={'Enter your password'}
          type={'password'}
          placeholder=' '
          handleOnChange={e => console.log('*'.repeat(e.target.value.length))}
        />
        <Button
          label={'Login'}
          onClick={() => alert('me apretaste!')}
          type='submit'
        />
      </form>
    </main>
  );
}
