import { format } from "date-fns";
import Avatar from "@/components/UI/Avatar/Avatar";
import styles from "./ChatMessage.module.css";

export default function ChatMessage({ message, chat }) {
  const isUser = message.senderType === "user";
  const time = format(new Date(message.createdAt), "Pp");

  return (
    <li
      className={`${styles.messageItem} ${isUser ? styles.user : styles.bot}`}>
      <div className={styles.group}>
        {!isUser && (
          <Avatar
            firstName={chat.firstName}
            lastName={chat.lastName}
            size={36}
          />
        )}
        <div className={styles.userGroup}>
          <div className={styles.bubble}>{message.content}</div>
          <span className={styles.time}>{time}</span>
        </div>
      </div>
    </li>
  );
}
