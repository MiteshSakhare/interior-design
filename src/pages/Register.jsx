import React from 'react';
import { useEffect } from 'react';
import AuthForms from '../components/auth/AuthForms';

const Register = () => {
  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <AuthForms type="register" />;
};

export default Register;
