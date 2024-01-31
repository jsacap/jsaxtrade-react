import React, { useState } from 'react';
import axios from 'axios';
import getCSRFToken from '../components/getCsrfToken';
import { useToast } from '@chakra-ui/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = getCSRFToken();

    try {
      const response = await axios.post('https://jsax-production.up.railway.app/contact/', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
      });
      

      toast({
        title: 'SUCCESS!',
        description: 'We will get in contact with you. Please keep an eye out for emails from JSA Capital.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setFormData({ name: '', email: ''});
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error submitting the form. Please try again later or contact info@jsa.capital',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
