import Image from "next/image";
import PropTypes from "prop-types";
import styles from "@/src/style/mockup-component.module.scss";
import laptop from "@/src/img/pk1.png";
import Mobile from "@/src/img/mobile1.png";

const MockupComponent = ({ pcImage, mobileImage, border }) => {
  return (
    <div className={`${styles.mockupContainer} ${border}`}>
      {/* Контейнер для макету ПК */}
      <div className={styles.laptopContainer}>
        <Image
          src={laptop.src}
          alt="Laptop mockup"
          className={styles.mockupImage}
          priority
          fill
        />
        <div className={styles.pcScreen}>
          <Image
            src={pcImage}
            alt="PC version of the website"
            fill
            className={styles.screenContent}
          />
        </div>
      </div>

      {/* Контейнер для макету мобільного */}
      <div className={styles.mobileContainer}>
        <Image
          src={Mobile.src}
          alt="Phone mockup"
          fill
          className={styles.mockupImage}
        />
        <div className={styles.mobileScreen}>
          <Image
            src={mobileImage}
            alt="Mobile version of the website"
            fill
            className={styles.screenContent}
          />
        </div>
      </div>
    </div>
  );
};

export default MockupComponent;
