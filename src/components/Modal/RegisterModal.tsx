import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Formik, Field, Form, FormikProps, FormikErrors } from 'formik';
import RUT from 'rut-chile';
import { validateEmail, validatePassword } from '../Validations';

type FormValues = {
  name: string;
  surname: string;
  email: string;
  password: string;
  country: string;
  role: string;
  rut: string;
};

let formikRef: FormikProps<FormValues> | null = null;

const MySwal = withReactContent(Swal);

const RegisterModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  useEffect(() => {
    const validate = (values: FormValues) => {
      const errors: FormikErrors<FormValues> = {};

      if (!values.name) {
        errors.name = 'Nombre es obligatorio';
      }

      if (!values.surname) {
        errors.surname = 'Apellido es obligatorio';
      }

      if (!values.email) {
        if (!validateEmail(values.email)) {
          errors.email = 'Correo electrónico inválido';
        } else {
          errors.email = 'Correo es obligatorio';
        }
      }

      if (!values.password) {
        errors.password = 'Contraseña es obligatoria';
      } else if (!validatePassword(values.password)) {
        errors.password = 'La contraseña no cumple con los requisitos';
      }

      if (!values.country) {
        errors.country = 'País es obligatorio';
      } else if (typeof values.country !== 'string') {
        errors.country = 'País debe ser un texto';
      }

      if (!values.rut) {
        errors.rut = 'RUT es obligatorio';
      } else if (!RUT.validate(values.rut)) {
        errors.rut = 'RUT inválido';
      }

      return errors;
    };

    const handleSubmit = async () => {
      await formikRef?.submitForm();

      if (formikRef?.isValid) {
        const formData = formikRef?.values;

        try {
          const accessToken = sessionStorage.getItem('accessToken');
          if (!accessToken) {
            throw new Error(
              'Falta el token de acceso. Por favor, inicia sesión nuevamente.'
            );
          }

          const response = await fetch('http://localhost:3000/users/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              errorData.message || 'Error al registrar el usuario'
            );
          }

          MySwal.fire({
            title: 'Usuario Registrado',
            text: 'El usuario ha sido registrado exitosamente.',
            icon: 'success',
          });
          onClose();
        } catch (error: unknown) {
          if (error instanceof Error) {
            MySwal.showValidationMessage(
              error.message || 'Error en la solicitud'
            );
          } else {
            MySwal.showValidationMessage('Error en la solicitud');
          }
        }
      } else {
        MySwal.showValidationMessage(JSON.stringify(formikRef?.errors));
      }
    };

    MySwal.fire({
      title: 'Registrar Nuevo Usuario',
      html: (
        <Formik<FormValues>
          innerRef={(ref) => (formikRef = ref)}
          initialValues={{
            name: '',
            surname: '',
            email: '',
            password: '',
            country: 'Chile', // Default value
            role: 'user', // Fixed value for the role
            rut: '',
          }}
          validate={validate}
          onSubmit={() => {}}
        >
          <Form>
            <Field
              type="text"
              className="swal2-input"
              name="name"
              placeholder="Nombre Completo"
            />
            <Field
              type="text"
              className="swal2-input"
              name="surname"
              placeholder="Apellido"
            />
            <Field
              type="email"
              className="swal2-input"
              name="email"
              placeholder="Correo Electrónico"
            />
            <Field
              type="password"
              className="swal2-input"
              name="password"
              placeholder="Contraseña"
            />
            <Field
              type="text"
              className="swal2-input"
              name="country"
              placeholder="País"
            />
            <Field
              type="text"
              className="swal2-input"
              name="rut"
              placeholder="RUT"
            />
          </Form>
        </Formik>
      ),
      didOpen: () => {
        Swal.getPopup()?.querySelector('input')?.focus();
      },
      preConfirm: handleSubmit,
    }).then((result) => {
      if (result.isDismissed) {
        onClose();
      }
    });
  }, [onClose]);

  return null;
};

export default RegisterModal;
