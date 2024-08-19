import { useState } from 'react';

export function useLogout() {
  const [userLogged, setUserLogged] = useState(true);

  const handleLogout = () => {
    setUserLogged(false);
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userSurname');
  };

  const handleLogin = () => {
    setUserLogged(true)
  }

  return {userLogged, handleLogout, handleLogin};
}
