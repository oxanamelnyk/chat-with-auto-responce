import styles from "./ChatHeader.module.css";

export default function ChatHeader({ chat }) {
  if (!chat) return null;

  const fullName = `${chat.firstName} ${chat.lastName}`;

  return (
    <div className={styles.header}>
      <img
        src={`https://ui-avatars.com/api/?name=${chat.firstName}+${chat.lastName}&rounded=true&size=36`}
        alt={fullName}
        className={styles.avatar}
      />
      <span className={styles.name}>{fullName}</span>
    </div>
  );
}