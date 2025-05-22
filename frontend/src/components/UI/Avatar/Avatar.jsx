import styles from "./Avatar.module.css";

export default function Avatar({ firstName, lastName, size = 50 }) {
  const fullName = `${firstName} ${lastName}`;
  const url = `https://ui-avatars.com/api/?name=${firstName}+${lastName}&rounded=true&size=${size}`;
  return (
    <img
      src={url}
      alt={fullName}
      className={styles.avatar}
      width={size}
      height={size}
    />
  );
}
