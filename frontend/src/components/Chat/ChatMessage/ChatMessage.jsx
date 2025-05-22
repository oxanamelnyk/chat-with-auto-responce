import { format } from "date-fns";
import Avatar from "@/components/UI/Avatar/Avatar";
import styles from "./ChatMessage.module.css";

export default function ChatMessage({ message }) {
  const isUser = message.senderType === "user";
  const time = format(new Date(message.createdAt), "Pp");

  return (
    <li
      className={`${styles.messageItem} ${isUser ? styles.user : styles.bot}`}>
      {!isUser && (
        // <img
        //   className={styles.avatar}
        //   src={`https://ui-avatars.com/api/?name=Bot&rounded=true&size=36`}
        //   alt="Bot"
        // />
        <Avatar />
      )}
      <div className={styles.bubble}>
        <p className={styles.content}>{message.content}</p>
        <span className={styles.time}>{time}</span>
      </div>
    </li>
  );
}
