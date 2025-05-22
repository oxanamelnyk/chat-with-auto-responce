import Avatar from "@/components/UI/Avatar/Avatar";
import styles from "@/components/Chat/ChatHeader/ChatHeader.module.css";

export default function ChatHeader({ chat }) {
  if (!chat) return null;
  const fullName = `${chat.firstName} ${chat.lastName}`;
  return (
    <div className={styles.header}>
      <Avatar firstName={chat.firstName} lastName={chat.lastName} />{" "}
      <span className={styles.name}>{fullName}</span>
    </div>
  );
}
