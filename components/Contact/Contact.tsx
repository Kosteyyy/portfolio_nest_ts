import React, { FormEvent, useEffect } from "react";
import styles from "./index.module.scss";
// import { sendMessage } from "../utils/sendMessage";
import { useForm } from "../../customHooks/useForm";
import { TFormData } from "../../types";
import { messageFromObject } from "../../utils/messageFromObject";
import { sendMessage } from "../../utils/sendMessage";

const messageData = {
  message: {
    chat: { id: process.env.NEXT_PUBLIC_CHAT_ID },
    text: "Привет, ботик! Приложение запустилось",
  },
};

const Contact = () => {
  const handleFormSubmit = (formData: TFormData) => {
    console.log("SENDING INFO", messageFromObject(formData));
    sendMessage(messageFromObject(formData));
  };
  const { formData, handleInputChange, handleSubmit } = useForm(
    {
      name: "",
      phone: "",
      subject: "",
      message: "",
    },
    handleFormSubmit
    // (formData) => console.log(formData)
    // (formData) => sendMessage(messageFromObject(formData))
  );

  const { name, phone, subject, message } = formData;

  // console.log(process.env.NEXT_PUBLIC_CHAT_ID, process.env.NEXT_PUBLIC_BOT_URL);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const responseJSON = await fetch(process.env.NEXT_PUBLIC_BOT_URL, {
  //       method: "POST",
  //       // mode: "no-cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: JSON.stringify({
  //         message: {
  //           chat: { id: process.env.NEXT_PUBLIC_CHAT_ID },
  //           text: "Привет, ботик! Приложение запустилось снова опять!",
  //         },
  //       }),
  //     });
  //     console.log(responseJSON);
  //   };

  //   fetchData().catch(console.error);
  //   console.log(JSON.stringify(messageData));
  // }, []);

  // const handleChange = (e: FormEvent) => {};

  return (
    <section id="home-contact" className="section-wrapper section--accent">
      <div className="container">
        <h2>Контакты</h2>
        <h3>Будем на связи</h3>
        <div className={styles.formContainer}>
          <form
            className={styles.form}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          >
            <div className={styles.inputBox}>
              <input type="text" name="Name" value={name} required />
              <span>Имя</span>
              <i></i>
            </div>
            <div className={styles.inputBox}>
              <input type="text" name="phone" value={phone} required />
              <span>Телефон или E-mail</span>
              <i></i>
            </div>
            {/* <div className={styles.inputBox}>
              <input type="text" required />
              <span>E-mail</span>
              <i></i>
            </div> */}
            <div className={styles.inputBox}>
              <input type="text" name="subject" value={subject} required />
              <span>Тема</span>
              <i></i>
            </div>
            <div className={styles.textBox}>
              <textarea required value={message} name="message" />
              <span>Сообщение</span>
              <i></i>
            </div>
            <button>Отправить сообщение</button>
          </form>
        </div>{" "}
      </div>
    </section>
  );
};

export default Contact;
