import Image from "next/image";
import PropTypes from "prop-types";
import styles from "@/src/style/mockup-component.module.scss";

const Mockup = ({ pcImage, mobileImage, border }) => {
  return (
    <div className={`${styles.mockupContainer} ${border}`}>
      {/* Контейнер для макетів ПК та мобільного */}

      <div className={styles.pcScreen}>
        <img
          src={pcImage}
          alt="PC version of the website"
          fill
          className={styles.screenContent}
        />
      </div>

      <div className={styles.mobileScreen}>
        <img
          src={mobileImage}
          alt="Mobile version of the website"
          fill
          className={styles.screenContent}
        />
      </div>
    </div>
  );
};

export default Mockup;
