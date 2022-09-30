import React from "react";
import styles from "./index.module.scss";

const messageData = {
  message: {
    chat: { id: process.env.NEXT_PUBLIC_CHAT_ID },
    text: "Привет, ботик! Приложение запустилось",
  },
};

const Contact = () => {
  console.log(process.env.NEXT_PUBLIC_CHAT_ID, process.env.NEXT_PUBLIC_BOT_URL);
  useEffect(() => {
    const fetchData = async () => {
      const responseJSON = await fetch(process.env.NEXT_PUBLIC_BOT_URL, {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          message: {
            chat: { id: process.env.NEXT_PUBLIC_CHAT_ID },
            text: "Привет, ботик! Приложение запустилось снова опять!",
          },
        }),
      });
      console.log(responseJSON);
    };

    fetchData().catch(console.error);
    console.log(JSON.stringify(messageData));
  }, []);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("SENDING INFO");
  };
  return (
    <section id="home-contact" className="section-wrapper section--accent">
      <div className="container">
        <h2>Контакты</h2>
        <h3>Будем на связи</h3>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.inputBox}>
              <input type="text" required />
              <span>Имя</span>
              <i></i>
            </div>
            <div className={styles.inputBox}>
              <input type="text" required />
              <span>Телефон или E-mail</span>
              <i></i>
            </div>
            {/* <div className={styles.inputBox}>
              <input type="text" required />
              <span>E-mail</span>
              <i></i>
            </div> */}
            <div className={styles.inputBox}>
              <input type="text" required />
              <span>Тема</span>
              <i></i>
            </div>
            <div className={styles.textBox}>
              <textarea required />
              <span>Сообщение</span>
              <i></i>
            </div>
            <button onClick={handleSubmit}>Отправить сообщение</button>
          </form>
        </div>{" "}
      </div>
    </section>
  );
};

export default Contact;
