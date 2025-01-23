"use client";
import React, { useState } from "react";
import style from "@/src/style/application-form.module.scss";
import { toast } from "sonner";

const questions = [
  {
    id: 1,
    question: "Для чого вам потрібен сайт?",
    options: [
      "1. Продаж послуг",
      "2. Продаж товарів",
      "3. Презентувати компанію або особистіть",
      "4. Показувати додаткову інформацію клієнтам",
      "5. Інше",
    ],
  },
  {
    id: 2,
    question: "Наскільки великий сайт потрібний?",
    options: [
      "1. На 1 сторінку",
      "2. На декілька сторінок",
      "3. Більше 50 сторінок",
      "4. Поки що не знаю",
    ],
  },
  {
    id: 3,
    question: "Є логотип та назва?",
    options: ["1. Так", "2. Ні", "3. Тільки логотип", "4. Тільки назва"],
  },
  {
    id: 4,
    question: "Уявляєте дизайн, який бажаєте?",
    options: ["1. Так", "2. Орієнтовно", "3. Ні, потірбна допомога"],
  },
];

const FormAplication = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [selectedOption, setSelectedOption] = useState("");

  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
  });

  const currentQuestion = questions[currentStep];

  // Функція для перевірки валідності номера телефону (формат: +380123456789)
  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\+?\d{10,13}$/; // Дозволяє + і від 10 до 13 цифр
    return phoneRegex.test(phone);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target; // Отримуємо name і value з input
    setContactInfo((prev) => ({
      ...prev, // Зберігаємо інші значення
      [name]: value, // Оновлюємо лише поле з конкретним ім'ям
    }));
  };
  const handleRadioChange = (e) => {
    e.preventDefault();

    if (currentStep >= questions.length) return;
    // Перевіряємо, чи обрана відповідь
    if (!selectedOption) {
      toast.error("Будь ласка, оберіть варіант");
      return;
    }

    // Зберігаємо відповідь поточного кроку
    const updatedFormData = {
      ...formData,
      [currentQuestion.question]: selectedOption,
    };
    setFormData(updatedFormData);

    // Очищаємо вибір перед наступним питанням
    setSelectedOption("");

    // Переходимо до наступного кроку
    if (currentStep < questions.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contactInfo.name.trim()) {
      toast.error("Будь ласка, введіть ім'я.");
      return;
    }

    if (!isValidPhoneNumber(contactInfo.phone)) {
      toast.error("Будь ласка, введіть коректний номер телефону.");
      return;
    }

    console.log("Повні дані форми:", { ...formData, contactInfo });
    toast.success("Форма успішно відправлена!");

    setCurrentStep(0);
    setFormData({});
    setContactInfo({ name: "", phone: "" });
  };

  return (
    <div className={style.aplication}>
      <div className="container">
        <div className="title-black-container">
          <h3 className={style.aplication__title}>
            Не визначилися який сайт вам потрібен?
          </h3>
        </div>

        <div className={style.form__container}>
          <p className={style.aplication__subtitle}>
            Пройдіть тест за 1 хвилину і ми допоможемо вам
          </p>
          <form className={style.form} onSubmit={handleRadioChange}>
            <p className={style.form__title}>
              {currentStep > questions.length - 1
                ? "Залишіть ваші контакти і ми вас проконсультуємо"
                : `${currentQuestion.question}`}
            </p>

            {currentStep > questions.length - 1 ? (
              <div className={style.form__contact}>
                <label className={style.form__name}>
                  <input
                    type="text"
                    name="name"
                    value={contactInfo.name}
                    onChange={handleContactChange}
                    placeholder="Ім'я"
                  />
                </label>
                <label className={style.form__tel}>
                  <input
                    type="tel"
                    name="phone"
                    value={contactInfo.phone}
                    onChange={handleContactChange}
                    placeholder="Телефон"
                    className={
                      !isValidPhoneNumber(contactInfo.phone) &&
                      contactInfo.phone
                        ? style.input__error
                        : ""
                    }
                  />
                </label>
              </div>
            ) : (
              <div className={style.form__input}>
                {currentQuestion.options.map((option) => (
                  <label
                    key={option}
                    className={
                      selectedOption === option
                        ? style.input__check
                        : style.input
                    }
                  >
                    <input
                      type="radio"
                      name={`question_${currentQuestion.id}`}
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionChange(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
            {/*             <div className={style.form__input}>
              {currentQuestion.options.map((option) => (
                <label
                  key={option}
                  className={
                    selectedOption === option ? style.input__check : style.input
                  }
                >
                  <input
                    type="radio"
                    name={`question_${currentQuestion.id}`}
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option}
                </label>
              ))}
            </div> */}

            {currentStep > questions.length - 1 ? (
              <button
                type="sumbit"
                className={style.form__button}
                onClick={handleSubmit}
              >
                Завершити
              </button>
            ) : (
              <button
                type="button"
                className={style.form__button}
                onClick={handleRadioChange}
              >
                Далі
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAplication;
