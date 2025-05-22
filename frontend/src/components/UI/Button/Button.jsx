import styles from "./Button.module.css";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      {...props}>
      {children}
    </button>
  );
}
