import Image from "next/image";
import PropTypes from "prop-types";
import styles from "@/src/style/mockup-component.module.scss";

const MockupComponent = ({ pcImage, mobileImage, border }) => {
  return (
    <div className={`${styles.mockupContainer} ${border}`}>
      {/* Контейнер для макету ПК */}

      <div className={styles.pcScreen}>
        <Image
          src={pcImage}
          alt="PC version of the website"
          fill
          className={styles.screenContent}
        />
      </div>

      {/* Контейнер для макету мобільного */}

      <div className={styles.mobileScreen}>
        <Image
          src={mobileImage}
          alt="Mobile version of the website"
          fill
          className={styles.screenContent}
        />
      </div>
    </div>
  );
};

export default MockupComponent;
