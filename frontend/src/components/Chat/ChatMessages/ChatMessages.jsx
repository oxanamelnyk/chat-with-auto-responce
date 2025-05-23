import { useEffect, useRef } from "react";
import { useChatStore } from "@/store/useChatStore";
import ChatMessage from "../ChatMessage/ChatMessage";
import toast from "react-hot-toast";
import styles from "@/components/Chat/ChatMessages/ChatMessages.module.css";

export default function ChatMessages() {
  const { messages, getMessages, selectedChat } = useChatStore();

  // Track the ID of the last seen bot message
  const lastSeenBotMessageId = useRef(null);

  // Fetch messages when a chat is selected, and keep polling every 3 seconds
  useEffect(() => {
    if (!selectedChat?._id) return;

    getMessages(selectedChat._id);
    const interval = setInterval(() => {
      getMessages(selectedChat._id);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedChat, getMessages]);

  // Show toast only when a *new* bot message appears
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    if (
      lastMessage &&
      lastMessage.senderType === "bot" &&
      lastMessage._id !== lastSeenBotMessageId.current
    ) {
      const fullName = `${selectedChat?.firstName ?? ""} ${
        selectedChat?.lastName ?? ""
      }`.trim();

      toast(`New message in ${fullName}`);
      lastSeenBotMessageId.current = lastMessage._id;
    }
  }, [messages, selectedChat]);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.messageList}>
        {messages.map((message) => (
          <ChatMessage
            key={message._id}
            message={message}
            chat={selectedChat}
          />
        ))}
      </ul>
    </div>
  );
}
