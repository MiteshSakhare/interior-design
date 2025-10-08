import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Visibility, 
  VisibilityOff, 
  Email, 
  Lock, 
  Person,
  Google,
  Facebook,
  GitHub,
  CheckCircle,
  ArrowForward
} from '@mui/icons-material';

const Icon = () => {
  // This component renders your logo.
  // For the image path to work, please ensure "dark-logo.png" is in your project's "public" folder.
  return (
    <img 
      src="/dark-logo.png" 
      alt="Logo" 
      className="w-full h-full object-cover rounded-full" 
    />
  );
};

export {Icon};


// --- SOLUTION ---
// I've moved the InputField component definition outside of the AuthForms component.
// This is a structural change in the code that does NOT affect the layout or CSS.
// It ensures that the InputField is a stable component that doesn't get re-created on every keystroke,
// which is what was causing the input to lose focus.
// I've also passed `register` and `errors` as props, since they are needed from the parent.
const InputField = React.memo(({ 
  label, 
  name, 
  type = 'text', 
  icon, 
  validation, 
  placeholder,
  showPasswordToggle = false,
  showPassword = false,
  onTogglePassword,
  register,
  errors
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    className="relative"
  >
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-400">
          {icon}
        </span>
      </div>
      <input
        {...register(name, validation)}
        type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
        placeholder={placeholder}
        className="input-modern pl-10 pr-12" // All your original CSS classes are preserved.
        autoComplete={type === 'password' ? 'current-password' : 'off'}
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none transition-colors duration-200"
          tabIndex={-1}
        >
          {showPassword ? <VisibilityOff className="w-5 h-5" /> : <Visibility className="w-5 h-5" />}
        </button>
      )}
    </div>
    <AnimatePresence>
      {errors[name] && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-1 text-sm text-red-600 dark:text-red-400"
        >
          {errors[name].message}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
));


const AuthForms = ({ type = 'login' }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    watch,
    reset
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
      terms: false
    }
  });

  const password = watch('password');

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const toggleConfirmPasswordVisibility = useCallback(() => {
    setShowConfirmPassword(prev => !prev);
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsLoading(false);
    setSubmitSuccess(true);
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      reset();
    }, 3000);
  };

  const socialProviders = [
    {
      name: 'Google',
      icon: <Google className="w-5 h-5" />,
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    {
      name: 'GitHub',
      icon: <GitHub className="w-5 h-5" />,
      color: 'from-gray-800 to-gray-900',
      hoverColor: 'hover:from-gray-900 hover:to-black'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 hero-enhanced">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape floating-shape-1 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-secondary-200/10 top-10 right-10" />
        <div className="floating-shape floating-shape-2 w-64 h-64 bg-gradient-to-br from-secondary-200/20 to-primary-200/10 bottom-10 left-10" />
        <div className="floating-shape floating-shape-3 w-48 h-48 bg-gradient-to-br from-primary-300/15 to-secondary-300/15 top-1/2 left-1/4" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full relative z-10"
      >
        
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-20 h-20 from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center mb-6 shadow-modern"
          >
            <span className="text-white font-bold text-3xl"><Icon/></span>
          </motion.div>
          
          <h2 className="h2 text-gray-900 dark:text-white mb-2">
            {type === 'login' ? 'Welcome Back!' : 'Create Account'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {type === 'login' 
              ? 'Sign in to your account to continue' 
              : 'Join us and start designing your space'
            }
          </p>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl flex items-center space-x-3"
            >
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              <div>
                <p className="text-green-800 dark:text-green-200 font-semibold">
                  {type === 'login' ? 'Login Successful!' : 'Account Created!'}
                </p>
                <p className="text-green-600 dark:text-green-400 text-sm">
                  {type === 'login' ? 'Redirecting to dashboard...' : 'Welcome to Interior Design!'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="card-modern p-8 shadow-modern-lg"
        >
          
          {/* Social Login */}
          <div className="mb-6">
            <div className="grid grid-cols-3 gap-3">
              {socialProviders.map((provider) => (
                <motion.button
                  key={provider.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center py-3 px-4 bg-gradient-to-r ${provider.color} ${provider.hoverColor} text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200`}
                >
                  {provider.icon}
                </motion.button>
              ))}
            </div>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-dark-100 text-gray-500 dark:text-gray-400">
                  Or continue with email
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Name Field (Register only) */}
            {type === 'register' && (
              <InputField
                label="Full Name"
                name="fullName"
                icon={<Person className="w-5 h-5" />}
                placeholder="Enter your full name"
                register={register}
                errors={errors}
                validation={{
                  required: 'Full name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters'
                  }
                }}
              />
            )}

            {/* Email Field */}
            <InputField
              label="Email Address"
              name="email"
              type="email"
              icon={<Email className="w-5 h-5" />}
              placeholder="Enter your email"
              register={register}
              errors={errors}
              validation={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              }}
            />

            {/* Password Field */}
            <InputField
              label="Password"
              name="password"
              icon={<Lock className="w-5 h-5" />}
              placeholder="Enter your password"
              showPasswordToggle
              showPassword={showPassword}
              onTogglePassword={togglePasswordVisibility}
              register={register}
              errors={errors}
              validation={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters'
                },
                ...(type === 'register' && {
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    message: 'Password must contain uppercase, lowercase, and number'
                  }
                })
              }}
            />

            {/* Confirm Password Field (Register only) */}
            {type === 'register' && (
              <InputField
                label="Confirm Password"
                name="confirmPassword"
                icon={<Lock className="w-5 h-5" />}
                placeholder="Confirm your password"
                showPasswordToggle
                showPassword={showConfirmPassword}
                onTogglePassword={toggleConfirmPasswordVisibility}
                register={register}
                errors={errors}
                validation={{
                  required: 'Please confirm your password',
                  validate: value => 
                    value === password || 'Passwords do not match'
                }}
              />
            )}

            {/* Remember Me / Terms */}
            <div className="flex items-start justify-between">
              {type === 'login' ? (
                <>
                  <div className="flex items-center">
                    <input
                      {...register('rememberMe')}
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded transition-colors duration-200"
                    />
                    <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                  <a 
                    href="#" 
                    className="text-sm text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                  >
                    Forgot password?
                  </a>
                </>
              ) : (
                <div className="flex items-start">
                  <input
                    {...register('terms', { required: 'Please accept the terms' })}
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1 transition-colors duration-200"
                  />
                  <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    I agree to the{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-500 dark:text-primary-400 transition-colors duration-200">
                      Terms of Service
                    </a>
                    {' '}and{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-500 dark:text-primary-400 transition-colors duration-200">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              )}
            </div>

            {/* Terms Error */}
            {type === 'register' && errors.terms && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-600 dark:text-red-400"
              >
                {errors.terms.message}
              </motion.p>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading || submitSuccess}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full space-x-2"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  <span>{type === 'login' ? 'Signing In...' : 'Creating Account...'}</span>
                </>
              ) : submitSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>{type === 'login' ? 'Signed In!' : 'Account Created!'}</span>
                </>
              ) : (
                <>
                  <span>{type === 'login' ? 'Sign In' : 'Create Account'}</span>
                  <ArrowForward className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {type === 'login' ? "Don't have an account? " : "Already have an account? "}
              <a 
                href={type === 'login' ? '/register' : '/login'} 
                className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-200"
              >
                {type === 'login' ? 'Sign up' : 'Sign in'}
              </a>
            </p>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Secure & Protected</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Fast Setup</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthForms;

