import Image from "next/image";
import PropTypes from "prop-types";
import style from "@/src/style/mockup-component.module.scss";
import Arrow from "@/public/icons/arrow.svg";
import Link from "next/link";

const Mockup = ({ pcImage, mobileImage, url }) => {
  return (
    <div className={style.mockupContainer}>
      <Link href={url} target="_blank" className={style.mockup__link}>
        <Arrow className={style.mockup__svg} />
      </Link>
      <div className={style.pcScreen}>
        <img
          src={pcImage}
          alt="PC version of the website"
          fill
          className={style.screenContent}
        />
      </div>

      <div className={style.mobileScreen}>
        <img
          src={mobileImage}
          alt="Mobile version of the website"
          fill
          className={style.screenContent}
        />
      </div>
    </div>
  );
};

export default Mockup;
