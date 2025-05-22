import { useChatStore } from "@/store/useChatStore";
import ChatMessages from "@/components/Chat/ChatMessages/ChatMessages";
import ChatHeader from "@/components/Chat/ChatHeader/ChatHeader";
import ChatMessageInput from "@/components/Chat/ChatMessageInput/ChatMessageInput";
import styles from "@/components/Chat/ChatContainer/ChatContainer.module.css";

export default function ChatContainer() {
  const { selectedChat } = useChatStore();
  return (
    <div className={styles.wrapper}>
      <ChatHeader chat={selectedChat} />
      <ChatMessages />
      <ChatMessageInput />
    </div>
  );
}
