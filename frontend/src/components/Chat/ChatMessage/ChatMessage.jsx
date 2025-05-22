import { format } from "date-fns";
import Avatar from "@/components/UI/Avatar/Avatar";
import styles from "./ChatMessage.module.css";

export default function ChatMessage({ message }) {
  const isUser = message.senderType === "user";
  const time = format(new Date(message.createdAt), "Pp");

  return (
    <li
      className={`${styles.messageItem} ${isUser ? styles.user : styles.bot}`}>
      {!isUser && <Avatar firstName="Bot" size={36} />}
      <div className={styles.bubble}>{message.content}</div>
      <span className={styles.time}>{time}</span>
    </li>
  );
}
