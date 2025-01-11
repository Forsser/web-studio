"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "@/src/style/modal.module.scss";
import { Formik, Field, Form } from "formik";
import { CloseIcon } from "./SvgComponent";

const Modal = ({ active, SetModalActive }) => {
  const dispatch = useDispatch();

  // Функція для збору даних з форми
  const handleSubmit = (e) => {
    e.preventDefault();

    // Тут можна відправити formData на сервер або обробити його іншим чином
  };

  return (
    <>
      <div className={active ? style.modalActive : style.modal}>
        <div
          className={
            active
              ? `${style.modalBackdrop} ${style.modalBackdropActive}`
              : style.modalBackdrop
          }
          onClick={() => SetModalActive(false)}
        ></div>
        <div
          className={
            active
              ? `${style.modalContainer} ${style.modalContainerActive}`
              : style.modalContainer
          }
        >
          <button
            className={style.modalCloseButton}
            onClick={() => SetModalActive(false)}
          >
            <CloseIcon />
          </button>
          <h2 className={style.modalTitle}>
            Залиште заявку, щоб дізнатися умови
          </h2>
          <div className={style.modalContainerSub}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
              }}
              onSubmit={async (values) => {
                dispatch(sendClientRequest(values));
              }}
            >
              <Form className={style.modalForm}>
                <label htmlFor="name" />
                <Field
                  id="name"
                  name="name"
                  placeholder="Ім'я"
                  className={style.modalInput}
                />

                <label htmlFor="email" />
                <Field
                  id="email"
                  name="email"
                  placeholder="Email"
                  className={style.modalInput}
                />

                <label htmlFor="phone" />
                <Field
                  id="phone"
                  name="phone"
                  placeholder="Номер телефону"
                  type="phone"
                  className={style.modalInput}
                />
                <button
                  type="submit"
                  className={style.modalSubmitButton}
                  onClick={() => SetModalActive(false)}
                >
                  <span className={style.modalSubmitText}>Залишити заявку</span>
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
