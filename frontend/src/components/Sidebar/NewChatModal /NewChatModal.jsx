import { useState } from "react";
import { axiosInstance } from "@/lib/axios";
import styles from "./NewChatModal.module.css";
import { Cross1Icon } from "@radix-ui/react-icons";
import Button from "@/components/UI/Button/Button";

export default function NewChatModal({ onClose, defaultName = "" }) {
  const [firstName, setFirstName] = useState(defaultName.split(" ")[0] || "");
  const [lastName, setLastName] = useState(defaultName.split(" ")[1] || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName) return;

    await axiosInstance.post("/chats", { firstName, lastName });
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3 className={styles.title}>Create New Chat</h3>
        <button onClick={onClose} className={styles.closeModalBtn}>
          <Cross1Icon />
        </button>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <Button type="submit">Create</Button>
        </form>
      </div>
    </div>
  );
}
