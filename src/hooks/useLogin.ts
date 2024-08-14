import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmailValid } from '../utils';

export function useLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorLabel, setErrorLabel] = useState('');

  const handleFieldChange = (field: string, event: React.ChangeEvent) => {
    if (field === 'email') {
      setFormData({
        ...formData,
        email: (event.currentTarget as HTMLInputElement).value,
      });
      setErrorLabel('')
    } else if (field === 'password') {
      setFormData({
        ...formData,
        password: (event.currentTarget as HTMLInputElement).value,
      });
      setErrorLabel('')
    }
  };

  const handleLoginClick = async () => {
    let response : Response;

    try {
      if(!isEmailValid(formData.email)) {
        throw new Error('Email must be valid')
      }
      response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/${import.meta.env.VITE_LOGIN_URL}`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const res = await response.json();

      let token: {
        id: string;
        name: string;
        surname: string;
        country: string;
        role: 'admin' | 'user';
        exp: number;
        iat: number;
      };

      if (response.ok) {
        token = JSON.parse(decodeURIComponent(escape(atob(res.token.split('.')[1]))));
        sessionStorage.setItem('accessToken', res.token);
        sessionStorage.setItem('userId', token.id);
        sessionStorage.setItem('userName', token.name);
        sessionStorage.setItem('userSurname', token.surname);
        sessionStorage.setItem('userRole', token.role);
        navigate('/home');
      } else {
        throw new Error(res.message)
      }
    } catch (error) {
      if ((error as Error).message === 'Bad Request Exception') {
        setErrorLabel('Email and password must be valid');
      } else {
        setErrorLabel((error as Error).message);
      }
      navigate('/');
    }
  };

  return {
    formData,
    handleFieldChange,
    errorLabel,
    handleLoginClick,
  };
}