import { useState } from "react";
import Avatar from "@/components/UI/Avatar/Avatar";
import styles from "./ChatListItem.module.css";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

export default function ChatListItem({ chat, onClick, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(chat.firstName);
  const [lastName, setLastName] = useState(chat.lastName);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onUpdate(chat._id, { firstName, lastName });
      setIsEditing(false);
    }
    if (e.key === "Escape") {
      setFirstName(chat.firstName);
      setLastName(chat.lastName);
      setIsEditing(false);
    }
  };
  return (
    <li className={styles.chatItem}>
      <div className={styles.chatInner}>
        <Avatar firstName={firstName} lastName={lastName} />
        <div className={styles.actions}>
          <div className={styles.buttonGroup}>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
              title="Edit">
              <Pencil1Icon />
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (confirm("Delete this chat?")) {
                  onDelete(chat._id);
                }
              }}
              title="Delete">
              <TrashIcon />
            </button>
          </div>
        </div>
        <div onClick={() => onClick(chat)}>
          {isEditing ? (
            <div className={styles.editGroup}>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                size={firstName.length || 1}
                onKeyDown={handleKeyDown}
                autoFocus
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                size={lastName.length || 1}
                onKeyDown={handleKeyDown}
              />
            </div>
          ) : (
            <>
              <h5 className={styles.name}>
                {firstName} {lastName}
              </h5>
              <p className={styles.message}>Lorem ipsum dolor sit.</p>
            </>
          )}
        </div>
      </div>
    </li>
  );
}
