import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClipboard, FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';

const QuoteForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: 'Submitting your request...' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your quote request has been received.'
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Sorry, there was an error submitting your request.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const ErrorMessage = ({ message }) => (
    <p className="mt-2 text-sm text-red-600 flex items-center">
      <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      {message}
    </p>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Get Your Free Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <FaCheckCircle className="text-white text-xl mt-1 mr-2 flex-shrink-0" />
                <span>Free, No-Obligation Quotes</span>
              </div>
              <div className="flex items-start">
                <FaShieldAlt className="text-white text-xl mt-1 mr-2 flex-shrink-0" />
                <span>Fully Certified & Insured</span>
              </div>
              <div className="flex items-start">
                <FaClock className="text-white text-xl mt-1 mr-2 flex-shrink-0" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.success 
                  ? 'bg-green-50 text-green-800 border-l-4 border-green-500' 
                  : 'bg-red-50 text-red-800 border-l-4 border-red-500'
              }`}>
                <div className="flex">
                  {submitStatus.success ? (
                    <FaCheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  ) : (
                    <FaShieldAlt className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="pl-10 block w-full rounded-lg border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="John Smith"
                  />
                </div>
                {errors.name && <ErrorMessage message={errors.name.message} />}
              </div>

              <div>
                <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
                  Postcode <span className="text-red-500">*</span>
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="postcode"
                    type="text"
                    {...register('postcode', { 
                      required: 'Postcode is required',
                      pattern: {
                        value: /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i,
                        message: 'Please enter a valid UK postcode'
                      }
                    })}
                    className="pl-10 block w-full rounded-lg border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="AB12 3CD"
                    style={{ textTransform: 'uppercase' }}
                  />
                </div>
                {errors.postcode && <ErrorMessage message={errors.postcode.message} />}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone', { 
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                          message: 'Please enter a valid phone number'
                        }
                      })}
                      className="pl-10 block w-full rounded-lg border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="07123 456789"
                    />
                  </div>
                  {errors.phone && <ErrorMessage message={errors.phone.message} />}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      className="pl-10 block w-full rounded-lg border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && <ErrorMessage message={errors.email.message} />}
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description of Work Required <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-3">
                    <FaClipboard className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="description"
                    rows={5}
                    {...register('description', { 
                      required: 'Please describe the work you need',
                      minLength: {
                        value: 20,
                        message: 'Please provide more details (at least 20 characters)'
                      }
                    })}
                    className="pl-10 block w-full rounded-lg border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="Please describe the electrical work you need in as much detail as possible..."
                  />
                </div>
                {errors.description && <ErrorMessage message={errors.description.message} />}
                <p className="mt-2 text-xs text-gray-500">
                  Please include details like the type of property, number of rooms, and any specific requirements.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Your Request...
                    </>
                  ) : (
                    <>
                      <FaEnvelope className="mr-2 h-5 w-5" />
                      Get Your Free Quote
                    </>
                  )}
                </button>
                <p className="mt-3 text-center text-sm text-gray-500">
                  We respect your privacy. Your information is secure and will never be shared.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default QuoteForm;
