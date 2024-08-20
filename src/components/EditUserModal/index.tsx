import styles from './style.module.css'
import React, { useState, useEffect } from 'react';
import { Modal, Confirm, Button } from '../index';
import { isEmailValid, isPhoneValid } from '../../validations';
import { userServices } from '../../services';
import { validationMessages } from '../../constants/messages';

type FormValues = {
  id: string;
  name: string;
  surname: string;
  email: string;
  country: string;
  role: string;
  rut: string;
  phone: string;
};

type EditUserModalProps = {
  user: FormValues;
  onClose: () => void;
  onUserUpdated: () => void;
};

export const EditUserModal: React.FC<EditUserModalProps> = ({
  user,
  onClose,
  onUserUpdated,
}) => {
  const [formValues, setFormValues] = useState<FormValues>(user);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setFormValues(user);
  }, [user]);

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
    if (!formValues.country)
      errors.country = validationMessages.countryRequired;
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

    setShowConfirm(true);
  };

  const handleConfirmUpdate = async () => {
    try {
      // Solo incluir los campos que han cambiado
      const updatedFields: Partial<FormValues> = {};
      Object.keys(formValues).forEach((key) => {
        if (
          formValues[key as keyof FormValues] !== user[key as keyof FormValues]
        ) {
          updatedFields[key as keyof FormValues] =
            formValues[key as keyof FormValues];
        }
      });

      const formData = { ...updatedFields, phone: Number(formValues.phone) };
      const accessToken = sessionStorage.getItem('accessToken') || '';
      const response = await userServices.update(
        accessToken,
        formValues.id,
        JSON.stringify(formData)
      );

      if (!response.ok) {
        const errorData = await response.json();
        let errorMessage = validationMessages.badRequest;

        if (errorData.additionalInfo && errorData.additionalInfo.message) {
          const backendErrors = errorData.additionalInfo.message;
          if (backendErrors.includes('email already exist.')) {
            errorMessage = validationMessages.userExists;
          }
        }

        throw new Error(errorMessage);
      }

      setNotificationMessage(validationMessages.updateSuccess);
      setIsSuccessful(true);
      setShowNotification(true);
      onUserUpdated();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setNotificationMessage(`Error: ${error.message}`);
        setIsSuccessful(false);
        setShowNotification(true);
      } else {
        setNotificationMessage(validationMessages.updateError);
        setIsSuccessful(false);
        setShowNotification(true);
      }
    } finally {
      setShowConfirm(false);
    }
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
    setNotificationMessage('');
    if (isSuccessful) {
      onClose();
    }
  };

  const handleConfirmClose = () => {
    setShowConfirm(false);
  };

  return (
    <>
      {showNotification && (
        <Confirm
          message={notificationMessage}
          onClose={handleNotificationClose}
        />
      )}
      {showConfirm && (
        <Confirm
          message={validationMessages.confirmUpdate}
          onClose={handleConfirmClose}
        >
          <button onClick={handleConfirmUpdate}>Confirm</button>
          <button onClick={handleConfirmClose}>Cancel</button>
        </Confirm>
      )}
      <Modal onClose={onClose}>
        <h2 className={styles.h2}>Edit User</h2>
        <form onSubmit={handleSubmit} className={styles.grid}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formValues.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formValues.surname}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formValues.country}
            onChange={handleChange}
          />

          <input
            type="text"
            name="rut"
            placeholder="RUT"
            value={formValues.rut}
            onChange={handleChange}
            disabled
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formValues.phone}
            onChange={handleChange}
          />
           <div  className={styles.errorLabel}>{(errors.name ||
            errors.surname ||
            errors.email ||
            errors.country ||
            errors.rut ||
            errors.phone) && `All fields must be valid`}</div>

          <Button
            label={'Update'}
            type={'submit'}
          />
        </form>
      </Modal>
    </>
  );
};