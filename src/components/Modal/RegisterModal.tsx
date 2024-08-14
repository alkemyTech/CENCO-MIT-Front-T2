import React, { useState } from 'react';
import RUT from 'rut-chile';
import { validateEmail, validatePassword } from '../Validations';

interface RegisterModalProps {
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    country: 'Chile',
    role: 'user',
    rut: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!RUT.validate(formData.rut)) {
      newErrors.rut = 'Invalid RUT';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password does not meet the requirements';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Retrieve the admin token from session storage
      const adminToken = sessionStorage.getItem('accessToken');

      if (!adminToken) {
        throw new Error('Admin token is missing. Please log in again.');
      }

      const response = await fetch('http://localhost:3000/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminToken}`, // Include the admin token in the request
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle error
        const errorData = await response.json();
        setErrors({ server: errorData.message || 'Error registering user' });
        return;
      }

      // Handle successful response, close modal or reset form
      onClose();
    } catch (error) {
      setErrors({ server: 'Request error' });
    }
  };

  return (
    <div>
      <h2>Register New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          placeholder="Surname"
          required
        />
        {errors.surname && <p>{errors.surname}</p>}
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        {errors.password && <p>{errors.password}</p>}
        <input
          name="rut"
          value={formData.rut}
          onChange={handleChange}
          placeholder="RUT"
          required
        />
        {errors.rut && <p>{errors.rut}</p>}
        {/* Add other fields and roles here */}
        <button type="submit">Register</button>
      </form>
      {/* Display server errors */}
      {errors.server && <p>{errors.server}</p>}
      {/* Button to close the modal */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RegisterModal;
