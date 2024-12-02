import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BsCheckCircleFill } from 'react-icons/bs';

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

const FormField = ({
  label,
  name,
  register,
  error,
  required = true,
  type = 'text',
}: {
  label: string;
  name: keyof IFormInputs;
  register: any;
  error?: string;
  required?: boolean;
  type?: string;
}) => (
  <div className="flex flex-col gap-1 w-full">
    <div className="flex flex-row items-center gap-1">
      <label className="font-dm-sans font-semibold text-base leading-[21px]">
        {label}
      </label>
      {required && (
        <span className="text-red-500 text-[11px] leading-[14px]">*</span>
      )}
    </div>
    <input
      type={type}
      className={`w-full p-3 border ${
        error ? 'border-red-500' : 'border-gray-200'
      } 
        rounded-[4px] font-dm-sans text-base leading-[150%] focus:outline-none focus:ring-2 focus:ring-purple-500`}
      {...register(name, { required })}
    />
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    if (!data.firstName || !data.lastName || !data.email) {
      toast.error(
        <div className="flex flex-col">
          <span className="font-bold">Required Fields Missing</span>
          <span className="text-sm">Please fill in all required fields.</span>
        </div>,
        {
          style: {
            background: '#1B0F2E',
            color: '#fff',
            border: '1px solid #533594',
          },
          icon: '⚠️',
          duration: 3000,
        }
      );
      return;
    }

    setIsSubmitting(true);
    try {
      // Send form data to Python backend
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-request-taken-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            company: data.company,
            message: data.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      console.log(result);
      reset();
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      // Handle error state here
      toast.error(
        <div className="flex flex-col">
          <span className="font-bold">Submission Failed</span>
          <span className="text-sm">Please try again later.</span>
        </div>,
        {
          style: {
            background: '#1B0F2E',
            color: '#fff',
            border: '1px solid #533594',
          },
          icon: '❌',
          duration: 3000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center p-12 gap-6 w-full lg:w-[636px] bg-white shadow-lg rounded-xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <BsCheckCircleFill className="w-24 h-24 text-[#533594]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-dm-sans font-bold text-center"
        >
          Thank You!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-600"
        >
          We have received your request and will get back to you shortly.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start p-12 gap-6 w-full lg:w-[636px] bg-white shadow-lg rounded-xl"
    >
      <h2 className="text-left font-dm-sans font-extrabold text-[26px] leading-[41px] tracking-[0.02em] w-full">
        Beta Registration
      </h2>

      {/* Name Fields Row */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <FormField
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName?.message}
        />
        <FormField
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName?.message}
        />
      </div>

      {/* Email Field */}
      <FormField
        label="Email"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
      />

      {/* Company Field */}
      <FormField
        label="Company"
        name="company"
        register={register}
        error={errors.company?.message}
      />

      {/* Message Field */}
      <div className="flex flex-col gap-1 w-full">
        <label className="font-dm-sans font-semibold text-base leading-[21px]">
          Message
        </label>
        <textarea
          className="w-full p-3 border border-gray-200 rounded-[4px] min-h-[100px]
            font-dm-sans text-base leading-[150%] focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register('message')}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center items-center py-3 px-6 bg-[#533594] 
          border border-[#372B89] rounded-[4px] text-white font-dm-sans text-lg leading-[160%]
          hover:bg-[#472d80] transition-colors duration-200 disabled:opacity-70"
      >
        {isSubmitting ? 'Submitting...' : 'Register to Beta'}
      </button>
    </form>
  );
};

export default ContactForm;
