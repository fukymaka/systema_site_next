'use client'

import Button from "./Button";
import FeedbackForm from "./FeedbackForm";
import Heading from "./Heading";
import Section from "./Section";
import { useState } from "react";
import { BottomLine } from "./design/Hero";

// Функция для копирования текста в буфер обмена
const copyToClipboard = (text) => {
  // Создаем временный элемент textarea
  const textarea = document.createElement("textarea");
  textarea.value = text;
  // Добавляем его на страницу вне области видимости
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  // Выделяем текст в элементе textarea
  textarea.select();
  // Копируем выделенный текст в буфер обмена
  document.execCommand("copy");
  // Удаляем временный элемент textarea
  document.body.removeChild(textarea);
};

const Feedback = () => {
  
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const handleCopyClick = (text) => {
    copyToClipboard(text);
    setShowCopyMessage(true);
    // Скрыть сообщение о копировании через 2 секунды
    setTimeout(() => setShowCopyMessage(false), 2000);
  };

  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <Section className="overflow-hidden" id="roadmap">
        <div className="container">
          <Heading title="Есть вопросы или предложения?" text="Оставьте заявку и мы обязательно с вами свяжемся" />
          <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="w-full md:w-1/3 md:mr-[5rem] grid grid-col-1">
              <Button className="py-10  my-2" color="bg-n-1/5" href="https://t.me/systema_atlas" target="_blank">Информационный канал</Button>
              <Button className="py-10  my-2" color="bg-n-1/5" href="https://t.me/systema_chat" target="_blank">Чат Systema</Button>
              <Button className="py-10  my-2" color="bg-n-1/5" href="https://t.me/systema_support_bot" target="_blank">Служба поддержки</Button>
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
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <FeedbackForm />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Feedback;
