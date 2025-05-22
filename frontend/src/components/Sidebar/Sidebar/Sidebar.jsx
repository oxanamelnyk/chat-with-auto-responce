import { useEffect, useState } from "react";
import { useChatStore } from "@/store/useChatStore";
import { axiosInstance } from "@/lib/axios";
import SidebarTopBar from "@/components/Sidebar/SidebarTopBar/SidebarTopBar";
import ChatListItem from "../ChatListItem/ChatListItem";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const { chats, getChats, setSelectedChat } = useChatStore();
  const [search, setSearch] = useState("");

  const filteredChats = chats.filter((chat) =>
    `${chat.firstName} ${chat.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  const handleChat = (chat) => {
    setSelectedChat(chat);
  };

  const handleUpdateChat = async (id, data) => {
    await axiosInstance.put(`/chats/${id}`, data);
    getChats();
  };

  const handleDeleteChat = async (id) => {
    await axiosInstance.delete(`/chats/${id}`);
    getChats();
  };

  useEffect(() => {
    getChats();
  }, [getChats, setSelectedChat]);

  return (
    <aside className={styles.wrapper}>
      <SidebarTopBar search={search} setSearch={setSearch} />
      <h2 className={styles.title}>Chats</h2>
      <ul>
        {filteredChats.map((chat) => (
          <ChatListItem
            key={chat._id}
            chat={chat}
            onClick={handleChat}
            onUpdate={handleUpdateChat}
            onDelete={handleDeleteChat}
          />
        ))}
      </ul>
    </aside>
  );
}
