import React, { useState } from "react";
import Button from "./Button";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Имя обязательно для заполнения';
    if (!formData.email) errors.email = 'Email обязательно для заполнения';
    if (!formData.message) errors.message = 'Сообщение обязательно для заполнения';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch('/api/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Ошибка при отправке заявки.');
      }
    } catch (error) {
      setErrorMessage('Ошибка при отправке заявки.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="success-message flex flex-col justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[4rem] h-[4rem] text-green-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <p className="text-white h4 text-center">Заявка успешно отправлена!</p>
      </div>
    );
  }

  return (
    <div className="isolate">
      <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="tagline mb-6 text-center text-n-1/50">
              Ваше имя
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-[1rem] border-0 bg-n-1/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
              />
              {formErrors.name && <p className="text-red-500 mt-1">{formErrors.name}</p>}
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="tagline mb-6 text-center text-n-1/50">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-[1rem] bg-n-1/5 border-0 border-main px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
              />
              {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="tagline mb-6 text-center text-n-1/50">
              Сообщение
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-[1rem] bg-n-1/5 border-0 border-main  px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
              />
              {formErrors.message && <p className="text-red-500 mt-1">{formErrors.message}</p>}
            </div>
          </div>
          
        </div>
        <div className="mt-10">
          <Button
            type="submit"
            className="block w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Отправка...' : 'Отправить заявку'}
          </Button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      </form>
    </div>
  )
}
