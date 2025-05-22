import ChatMessages from "./ChatMessages";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import styles from "./ChatContainer.module.css";
import ChatMessageInput from "./ChatMessageInput";
export default function ChatContainer() {
  const { selectedChat } = useChatStore();
  return (
    <div className={styles.container}>
      {" "}
      <ChatHeader chat={selectedChat} />
      <ChatMessages />
      <ChatMessageInput />
    </div>
  );
}
