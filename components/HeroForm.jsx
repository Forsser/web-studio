"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Formik } from "formik";

import style from "@/src/style/hero-form.module.scss";

export default function HeroForm({ emailTo }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async ({ name, phone }) => {
    setIsSubmitting(true);
    // Basic validation
    if (!name.trim() || !phone.trim()) {
      toast.error("Будь ласка, заповніть всі поля");
      setIsSubmitting(false);
      return;
    }
    // Перевірка, чи ім'я містить тільки текст
    const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]+$/;
    if (!nameRegex.test(name.trim())) {
      toast.error("Ім'я має містити лише літери");
      setIsSubmitting(false);
      return;
    }

    // Перевірка, чи телефон містить тільки цифри (дозволяється + на початку)
    const phoneRegex = /^\+?[0-9]+$/;
    if (!phoneRegex.test(phone.trim())) {
      toast.error("Номер телефону має містити лише цифри");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
        }),
      });
      console.log("Response status:", response.status);

      if (response.ok) {
        toast.success("Заявка успішно надіслана!");
        // Reset form
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Помилка надсилання заявки");
      }
    } catch (error) {
      toast.error("Сталася помилка. Спробуйте пізніше.");
      console.error("Помилка надсилання форми:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={style.form}>
      <div className={style.form__title}>
        <p>
          Можемо взяти ще 2 проекти зі знижки -20%, поспішайте залишити заявку!
        </p>
      </div>

      <Formik
        initialValues={{ name: "", phone: "" }}
        onSubmit={(values, actions) => {
          handleSubmit(values);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} className={style.form__container}>
            <input
              name="name"
              className={style.form__input}
              onChange={props.handleChange}
              type="text"
              placeholder="Ваше ім'я"
              value={props.values.name}
              disabled={isSubmitting}
            />
            <input
              name="phone"
              className={style.form__input}
              type="tel"
              placeholder="Номер телефону"
              value={props.values.phone}
              onChange={props.handleChange}
              disabled={isSubmitting}
            />
            <button className={style.form__button} type="submit">
              Отримати знижку -20%!
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

/*     <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Ваше ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        disabled={isSubmitting}
      />
      <Input
        type="tel"
        placeholder="Номер телефону"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        disabled={isSubmitting}
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Надсилання..." : "Надіслати заявку"}
      </Button>
    </form> */
