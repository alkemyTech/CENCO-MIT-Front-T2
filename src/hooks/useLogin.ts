import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmailValid } from '../validations';
import { authServices } from '../services';
import { useLogout } from './useLogout';
import { decodeToken } from '../validations/decodeToken';

export function useLogin() {
  const navigate = useNavigate();
  const { handleLogin } = useLogout();

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
      setErrorLabel('');
    } else if (field === 'password') {
      setFormData({
        ...formData,
        password: (event.currentTarget as HTMLInputElement).value,
      });
      setErrorLabel('');
    }
  };

  const handleLoginClick = async () => {
    let response: Response;
    try {
      if (!isEmailValid(formData.email)) throw new Error('Email must be valid');
      const body = JSON.stringify(formData);
      response = await authServices.login(body);
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
        token = decodeToken(res.token);
        sessionStorage.setItem('accessToken', res.token);
        sessionStorage.setItem('userId', token.id);
        sessionStorage.setItem('userName', token.name);
        sessionStorage.setItem('userSurname', token.surname);
        handleLogin();
        navigate('/dashboard');
      } else {
        throw new Error(res.message);
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
