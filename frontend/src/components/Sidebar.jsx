import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import styles from "./Sidebar.module.css";
import Header from "./Header";

export default function Sidebar() {
  const { chats, getChats, setSelectedChat } = useChatStore();

  useEffect(() => {
    getChats();
  }, [getChats]);

  return (
    <aside className={styles.wrapper}>
      <Header />
      <h2 className={styles.title}>Chats</h2>
      <ul>
        {chats.map((chat) => (
          <li
            className={styles.chatItem}
            key={chat._id}
            onClick={() => setSelectedChat(chat)}>
            <div className={styles.chatInner}>
              <img
                src={`https://ui-avatars.com/api/?name=${chat.firstName}+${chat.lastName}&rounded=true&size=50`}
                alt={`${chat.firstName} ${chat.lastName}`}
              />
              <div>
                <h5 className={styles.name}>
                  {chat.firstName} {chat.lastName}
                </h5>
                <p className={styles.message}>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
