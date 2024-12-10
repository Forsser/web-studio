import heroSvg from "./hero.svg";

export default function Icon({ name, size = 24 }) {
  return (
    <svg width={size} height={size} role="img" aria-hidden="true">
      <use href={`${heroSvg}#${name}`} />
    </svg>
  );
}
