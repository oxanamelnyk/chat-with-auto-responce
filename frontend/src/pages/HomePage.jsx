import { useChatStore } from "../store/useChatStore";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
import styles from "./HomePage.module.css";
import Sidebar from "../components/SIdebar";

export default function HomePage() {
  const { selectedChat } = useChatStore();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Sidebar />
        {!selectedChat ? <NoChatSelected /> : <ChatContainer />}
      </div>
    </main>
  );
}
