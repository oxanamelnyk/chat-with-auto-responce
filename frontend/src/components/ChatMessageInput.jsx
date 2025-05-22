import { useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { axiosInstance } from "../lib/axios";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import styles from "./ChatMessageInput.module.css";

export default function ChatInput() {
  const [text, setText] = useState("");
  const { selectedChat, getMessages } = useChatStore();

  const handleSend = async () => {
    const content = text.trim();
    if (!content || !selectedChat?._id) return;

    try {
      await axiosInstance.post("/messages", {
        chatId: selectedChat._id,
        content,
        senderType: "user",
      });

      setText("");
      await getMessages(selectedChat._id);
    } catch (err) {
      console.error("Send failed:", err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder="Type your message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.button} onClick={handleSend}>
        <PaperPlaneIcon />
      </button>
    </div>
  );
}