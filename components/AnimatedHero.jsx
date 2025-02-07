// components/AnimatedHero.jsx

import styles from "@/src/style/animated-hero.module.scss";

const AnimatedHero = () => {
  const circlesConfig = [
    {
      size: 256,
      border: "4px dotted",
      color: "#60a5fa",
      speed: "50s",
      animation: "spin",
    },
    {
      size: 320,
      border: "4px dashed",
      color: "#34d399",
      speed: "25s",
      animation: "spinReverse",
    },
    {
      size: 384,
      border: "8px double",
      color: "#9333ea",
      speed: "30s",
      animation: "spin",
    },
  ];

  return (
    <div className={styles.heroContainer}>
      {circlesConfig.map((config, i) => (
        <div
          key={i}
          className={`${styles.circle} ${styles[config.animation]}`}
          style={{
            width: config.size + "px",
            height: config.size + "px",
            border: config.border,
            borderColor: config.color,
            animationDuration: config.speed,
          }}
        />
      ))}

      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.description}>
          Creative developer specializing in modern web experiences and
          interactive animations
        </p>
      </div>
    </div>
  );
};

export default AnimatedHero;
