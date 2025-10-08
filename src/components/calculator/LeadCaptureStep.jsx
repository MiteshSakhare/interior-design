import React from 'react';
import { useForm } from 'react-hook-form';
import { Person, Email, Phone, Home } from '@mui/icons-material';

const LeadCaptureStep = ({ onSubmit, isSubmitting }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="max-w-lg mx-auto px-2 sm:px-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Your estimate is almost ready!</h2>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-center">Just a few details to personalize your estimate.</p>
      
      <form id="lead-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Person className="w-5 h-5 text-gray-400" />
            </div>
            <input
              {...register('firstName', { required: 'First name is required' })}
              type="text"
              placeholder="First Name"
              className="input-modern pl-10 w-full"
            />
            {errors.firstName && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.firstName.message}</p>}
          </div>

          <div className="relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Person className="w-5 h-5 text-gray-400" />
            </div>
            <input
              {...register('lastName', { required: 'Last name is required' })}
              type="text"
              placeholder="Last Name"
              className="input-modern pl-10 w-full"
            />
            {errors.lastName && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.lastName.message}</p>}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Email className="w-5 h-5 text-gray-400" />
          </div>
          <input
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }})}
            type="email"
            placeholder="Email ID"
            className="input-modern pl-10 w-full"
          />
          {errors.email && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="w-5 h-5 text-gray-400" />
          </div>
          <input
            {...register('phone', { required: 'Phone number is required' })}
            type="tel"
            placeholder="Phone number"
            className="input-modern pl-10 w-full"
          />
          {errors.phone && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Home className="w-5 h-5 text-gray-400" />
          </div>
          <input
            {...register('propertyName')}
            type="text"
            placeholder="Property Name (Optional)"
            className="input-modern pl-10 w-full"
          />
        </div>

        <div className="flex items-center pt-2">
          <input
            {...register('whatsappUpdates')}
            id="whatsappUpdates"
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <label htmlFor="whatsappUpdates" className="ml-3 block text-sm sm:text-base text-gray-700 dark:text-gray-300">
            Send me updates on WhatsApp
          </label>
        </div>

      </form>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-6 text-center">
        By submitting this form, you agree to our privacy policy & terms.
      </p>
    </div>
  );
};

export default LeadCaptureStep;