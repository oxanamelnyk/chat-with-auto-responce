import { useEffect, useRef } from "react";
import { useChatStore } from "@/store/useChatStore";
import ChatMessage from "../ChatMessage/ChatMessage";
import toast from "react-hot-toast";
import styles from "@/components/Chat/ChatMessages/ChatMessages.module.css";

export default function ChatMessages() {
  const { messages, getMessages, selectedChat } = useChatStore();
  const prevBotMsgCount = useRef(0);

  useEffect(() => {
    if (!selectedChat?._id) return;

    getMessages(selectedChat._id);
    const interval = setInterval(() => {
      getMessages(selectedChat._id);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedChat, getMessages]);

  useEffect(() => {
    const botMessages = messages.filter((m) => m.senderType === "bot");

    if (botMessages.length > prevBotMsgCount.current) {
      const fullName = `${selectedChat?.firstName ?? ""} ${
        selectedChat?.lastName ?? ""
      }`.trim();

      toast(`New message in ${fullName}`);
      prevBotMsgCount.current = botMessages.length;
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
