import React from "react";
import Layout from "../../containers/Layout";
import styles from "./styles.module.scss";
const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac5acae0005f8f0b3e3665048c656f52aafa2867138dbb61bb0d9febe7c0ef308&amp;source=constructor"
        width="325"
        height="360"
        frameBorder="0"
      ></iframe>
      <p>
        Санкт-Петербург, Московский проспект, 186 <br />
        Время работы: ПН-ПТ, 10:00-20:00
        <br /> Телефон для связи: +79992496568
      </p>
    </div>
  );
};

export default ContactsPage;
