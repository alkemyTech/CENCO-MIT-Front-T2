import React, { useState } from 'react';
import { Modal } from './index';
import {
  isEmailValid,
  isPasswordValid,
  isPhoneValid,
  isRutValid,
} from '../../validations';
import { registerUser } from '../../services';
import { Notification } from './Notification';
import { validationMessages } from '../../constants/messages';

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

const RegisterModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
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
      await registerUser(formData);
      setNotificationMessage('User registered successfully');
      setShowNotification(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setNotificationMessage(`Error: ${error.message}`);
        setShowNotification(true);
      } else {
        setNotificationMessage('Unknown error occurred during the request');
        setShowNotification(true);
      }
    }
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
    setNotificationMessage('');
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
        <h2>Register New User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && <div>{errors.name}</div>}

          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formValues.surname}
            onChange={handleChange}
          />
          {errors.surname && <div>{errors.surname}</div>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <div>{errors.email}</div>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
          {errors.password && <div>{errors.password}</div>}

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formValues.country}
            onChange={handleChange}
          />
          {errors.country && <div>{errors.country}</div>}

          <input
            type="text"
            name="rut"
            placeholder="RUT"
            value={formValues.rut}
            onChange={handleChange}
          />
          {errors.rut && <div>{errors.rut}</div>}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formValues.phone}
            onChange={handleChange}
          />
          {errors.phone && <div>{errors.phone}</div>}

          <button type="submit">Register</button>
        </form>
      </Modal>
    </>
  );
};

export default RegisterModal;