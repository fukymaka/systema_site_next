import React, { useState } from "react";
import Button from "./Button";

export default function CompanyForm() {
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
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
    if (!formData.company) errors.company = 'Организация обязательно для заполнения';
    if (!formData.email) errors.email = 'Email обязательно для заполнения';
    if (!formData.phone) errors.phone = 'Телефон обязательно для заполнения';
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
      const response = await fetch('/api/send-email', {
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

  const handleCopyClick = (text) => {
    copyToClipboard(text);
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 2000);
  };

  const copyToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  if (isSuccess) {
    return (
      <div className="success-message flex flex-col justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[4rem] h-[4rem] text-green-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <p className="text-black h4 text-center">Заявка успешно отправлена!</p>
      </div>
    );
  }

  return (
    <div className="isolate">
      <div className="max-w-[60rem] mx-auto md:text-center">
        <h4 className="h4 text-n-8">Оставьте заявку</h4>
        <p className="body-2 mb-5 text-n-4">С вами свяжется наш менеджер</p>
      </div>
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="tagline mb-6 text-center text-n-5">
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
              />
              {formErrors.name && <p className="text-red-500 mt-1">{formErrors.name}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="tagline mb-6 text-center text-n-5">
              Ваша организация
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
              />
              {formErrors.company && <p className="text-red-500 mt-1">{formErrors.company}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="tagline mb-6 text-center text-n-5">
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
              />
              {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="tagline mb-6 text-center text-n-5">
              Номер телефона
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phone"
                id="phone-number"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
              />
              {formErrors.phone && <p className="text-red-500 mt-1">{formErrors.phone}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="tagline mb-6 text-center text-n-5">
              Сообщение
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 relative">
          <Button type="submit" className="block w-full" disabled={isLoading}>
            {isLoading ? 'Отправка...' : 'Отправить заявку'}
          </Button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      </form>
      <div className="relative">
        <p className="body-2 mt-4 text-center text-n-4">
          <a onClick={() => handleCopyClick("support@systema-learn.ru")} className="cursor-pointer underline">support@systema-learn.ru</a>
        </p>
        {showCopyMessage && (
          <div className="absolute inset-x-0 top-15 bg-green-500/50 text-white text-center rounded-[1rem] p-2">
            <div>Скопировано</div>
          </div>
        )}
      </div>
    </div>
  );
}
