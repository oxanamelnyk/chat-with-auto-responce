import { useEffect } from "react";
import { useChatStore } from "@/store/useChatStore";
import SidebarTopBar from "@/components/Sidebar/SidebarTopBar/SidebarTopBar";
import ChatListItem from "./SidebarChatItem/SidebarChatItem";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const { chats, getChats, setSelectedChat } = useChatStore();

  const handleChat = (chat) => {
    setSelectedChat(chat);
  };
  useEffect(() => {
    getChats();
  }, [getChats, setSelectedChat]);

  return (
    <aside className={styles.wrapper}>
      <SidebarTopBar />
      <h2 className={styles.title}>Chats</h2>
      <ul>
        {chats.map((chat) => (
          <ChatListItem key={chat._id} chat={chat} onClick={handleChat} />
        ))}
      </ul>
    </aside>
  );
}
