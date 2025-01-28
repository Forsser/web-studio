"use client";
import React, { useState, useEffect } from "react";
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
  const [titleVisible, setTitleVisible] = useState(true);
  const [displayedQuestion, setDisplayedQuestion] = useState(
    questions[0].question
  );
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
  });

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\+?\d{10,13}$/;
    return phoneRegex.test(phone);
  };

  // Ефект для анімації зміни питання
  useEffect(() => {
    const updateQuestion = async () => {
      if (currentStep <= questions.length - 1) {
        // Спочатку ховаємо поточне питання
        setTitleVisible(false);

        // Чекаємо завершення анімації приховування
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Оновлюємо текст питання
        setDisplayedQuestion(questions[currentStep].question);

        // Чекаємо один кадр для оновлення DOM
        await new Promise((resolve) => setTimeout(resolve, 16));

        // Показуємо нове питання
        setTitleVisible(true);
      } else {
        // Для останнього кроку з контактами
        setTitleVisible(false);
        await new Promise((resolve) => setTimeout(resolve, 300));
        setDisplayedQuestion("Залишіть ваші контакти і ми вас проконсультуємо");
        await new Promise((resolve) => setTimeout(resolve, 16));
        setTitleVisible(true);
      }
    };

    updateQuestion();
  }, [currentStep]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);

    const updatedFormData = {
      ...formData,
      [questions[currentStep].question]: option,
    };
    setFormData(updatedFormData);

    // Затримка перед зміною кроку для завершення анімації вибору опції
    setTimeout(() => {
      if (currentStep < questions.length) {
        setCurrentStep((prev) => prev + 1);
        setSelectedOption("");
      }
    }, 100);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
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
          <form className={style.form} onSubmit={(e) => e.preventDefault()}>
            <p
              className={`${style.form__title} ${
                titleVisible ? style.visible : style.hidden
              }`}
            >
              {displayedQuestion}
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
                <button
                  type="button"
                  className={style.form__button}
                  onClick={handleSubmit}
                >
                  Завершити
                </button>
              </div>
            ) : (
              <div className={style.form__input}>
                {questions[currentStep].options.map((option) => (
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
                      name={`question_${questions[currentStep].id}`}
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionChange(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAplication;
