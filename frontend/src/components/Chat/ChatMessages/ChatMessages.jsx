import { useEffect } from "react";
import { useChatStore } from "@/store/useChatStore";
import ChatMessage from "@/components/Chat/ChatMessage/ChatMessage";
import styles from "@/components/Chat/ChatMessages/ChatMessages.module.css";

export default function ChatMessages() {
  const { messages, getMessages, selectedChat } = useChatStore();

  useEffect(() => {
    if (selectedChat?._id) {
      getMessages(selectedChat._id);
    }
  }, [getMessages, selectedChat]);

  return (
    <div className={styles.container}>
      <div style={{ textAlign: "left", opacity: 0.5 }}>
        🤖 Bot is not connected yet. Placeholder shown.
      </div>
      <ul className={styles.messageList}>
        {messages.map((message) => {
          console.log(message);

          return <ChatMessage key={message._id} message={message} />;
        })}
      </ul>
    </div>
  );
}
