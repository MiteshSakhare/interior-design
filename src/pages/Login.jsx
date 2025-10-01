import React from 'react';
import { useEffect } from 'react';
import AuthForms from '../components/auth/AuthForms';

const Login = () => {
  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <AuthForms type="login" />;
};

export default Login;
