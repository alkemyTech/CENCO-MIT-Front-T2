<<<<<<<< HEAD:src/components/RegisterModal/index.tsx
import styles from './style.module.css';
import { FC, useState } from 'react';
========
import React, { useState } from 'react';
import { Modal } from '../Modal';
>>>>>>>> a4e42a5 (rebase):src/components/global/Modal/RegisterModal.tsx
import {
  isEmailValid,
  isPasswordValid,
  isPhoneValid,
  isRutValid,
<<<<<<<< HEAD:src/components/RegisterModal/index.tsx
} from '../../validations';
import { userServices } from '../../services';
import { Button, Modal, Notification } from '../index';
import { validationMessages } from '../../constants/messages';
========
} from '../../../validations';

import { userServices } from '../../../services';
import { Notification } from './Notification';
import { validationMessages } from '../../../constants/messages';
>>>>>>>> a4e42a5 (rebase):src/components/global/Modal/RegisterModal.tsx

type FormValues = {
  name: string;
  surname: string;
  email: string;
  password: string;
  country: string;
  role: string;
  rut: string;
  phone: string;
};

type RegisterModalProps = {
  onClose: () => void;
<<<<<<<< HEAD:src/components/RegisterModal/index.tsx
  onUserRegistered: () => void;
========
  onUserRegistered: () => void; // Nuevo callback
>>>>>>>> a4e42a5 (rebase):src/components/global/Modal/RegisterModal.tsx
};

export const RegisterModal: FC<RegisterModalProps> = ({
  onClose,
  onUserRegistered,
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    surname: '',
    email: '',
    password: '',
    country: 'Chile',
    role: 'user',
    rut: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setErrors({});
  };

  const validate = () => {
    const errors: Partial<FormValues> = {};

    if (!formValues.name) errors.name = validationMessages.nameRequired;
    if (!formValues.surname)
      errors.surname = validationMessages.surnameRequired;
    if (!formValues.email) {
      errors.email = validationMessages.emailRequired;
    } else if (!isEmailValid(formValues.email)) {
      errors.email = validationMessages.emailInvalid;
    }
    if (!formValues.password) {
      errors.password = validationMessages.passwordRequired;
    } else if (!isPasswordValid(formValues.password)) {
      errors.password = validationMessages.passwordInvalid;
    }
    if (!formValues.country)
      errors.country = validationMessages.countryRequired;
    if (!formValues.rut) {
      errors.rut = validationMessages.rutRequired;
    } else if (!isRutValid(formValues.rut)) {
      errors.rut = validationMessages.rutInvalid;
    }
    if (!formValues.phone) {
      errors.phone = validationMessages.phoneRequired;
    } else if (!isPhoneValid(formValues.phone)) {
      errors.phone = validationMessages.phoneInvalid;
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const formData = { ...formValues, phone: Number(formValues.phone) };
      const accessToken = sessionStorage.getItem('accessToken') || '';
      const response = await userServices.create(
        accessToken,
        JSON.stringify(formData)
      );

      if (!response.ok) {
        const errorData = await response.json();
        let errorMessage = validationMessages.badRequest;

        if (errorData.additionalInfo && errorData.additionalInfo.message) {
          const backendErrors = errorData.additionalInfo.message;
          if (
            backendErrors.includes('rut already exist.') ||
            backendErrors.includes('email already exist.')
          ) {
            errorMessage = validationMessages.userExists;
          }
        }
        throw new Error(errorMessage);
      }

      setNotificationMessage('User registered successfully');
      setIsSuccessful(true);
      setShowNotification(true);
<<<<<<<< HEAD:src/components/RegisterModal/index.tsx
      onUserRegistered();
========
      onUserRegistered(); // Llama al callback para actualizar la lista de usuarios
>>>>>>>> a4e42a5 (rebase):src/components/global/Modal/RegisterModal.tsx
    } catch (error: unknown) {
      if (error instanceof Error) {
        setNotificationMessage(`Error: ${error.message}`);
        setIsSuccessful(false);
        setShowNotification(true);
      } else {
        setNotificationMessage('Unknown error occurred during the request');
        setIsSuccessful(false);
        setShowNotification(true);
      }
    }
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
    setNotificationMessage('');
    if (isSuccessful) {
<<<<<<<< HEAD:src/components/RegisterModal/index.tsx
      onClose();
========
      onClose(); // Solo cierra el modal si el registro fue exitoso
>>>>>>>> a4e42a5 (rebase):src/components/global/Modal/RegisterModal.tsx
    }
  };

  return (
    <>
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={handleNotificationClose}
        />
      )}
      <Modal onClose={onClose}>
        <h2 className={styles.h2}>Register New User</h2>
        <form
          onSubmit={handleSubmit}
          className={styles.grid}
        >
          <input
            type='text'
            name='name'
            placeholder='Full Name'
            value={formValues.name}
            onChange={handleChange}
          />

          <input
            type='text'
            name='surname'
            placeholder='Surname'
            value={formValues.surname}
            onChange={handleChange}
          />

          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formValues.email}
            onChange={handleChange}
            autoComplete={'new-password'}
          />

          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formValues.password}
            onChange={handleChange}
            autoComplete={'new-password'}
          />

          <input
            type='text'
            name='country'
            placeholder='Country'
            value={formValues.country}
            onChange={handleChange}
          />

          <input
            type='text'
            name='rut'
            placeholder='RUT'
            value={formValues.rut}
            onChange={handleChange}
          />

          <input
            type='text'
            name='phone'
            placeholder='Phone Number'
            value={formValues.phone}
            onChange={handleChange}
          />
          <p className={styles.errorLabel}>
            {(errors.name ||
              errors.surname ||
              errors.email ||
              errors.password ||
              errors.country ||
              errors.rut ||
              errors.phone) &&
              `All fields must be valid`}
          </p>

          <Button
            label={'Register'}
            type={'submit'}
          />
        </form>
      </Modal>
    </>
  );
};
