import Avatar from "@/components/UI/Avatar/Avatar";
import styles from "./ChatListItem.module.css";

export default function ChatListItem({ chat, onClick }) {
  return (
    <li className={styles.chatItem} onClick={() => onClick(chat)}>
      <div className={styles.chatInner}>
        <Avatar firstName={chat.firstName} lastName={chat.lastName} />
        <div>
          <h5 className={styles.name}>
            {chat.firstName} {chat.lastName}
          </h5>
          <p className={styles.message}>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </li>
  );
}
