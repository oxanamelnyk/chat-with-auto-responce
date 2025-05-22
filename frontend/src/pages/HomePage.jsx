import { useChatStore } from "@/store/useChatStore";
import NoChatSelected from "@/components/Chat/NoChatSelected/NoChatSelected";
import ChatContainer from "@/components/Chat/ChatContainer/ChatContainer";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const { selectedChat } = useChatStore();
  return (
    <main className={styles.main}>
      <Sidebar />
      {!selectedChat ? <NoChatSelected /> : <ChatContainer />}
    </main>
  );
}
