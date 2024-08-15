import styles from './style.module.css'
import { useNavigate, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Button } from '../../components';

export function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  const handleClick = () => {
    navigate(-1);
    console.error(error);
  };
  
  return (
    <main className={styles.errorPage}>
      <h1>Oops.. there's been an unexpected error.</h1>
      <p className={styles.errorText}>{errorMessage}</p>
        <Button
          label='Go back home'
          onClick={handleClick}
        />
    </main>
  )
}