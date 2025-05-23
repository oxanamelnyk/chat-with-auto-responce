import Avatar from "@/components/UI/Avatar/Avatar";
import Button from "@/components/UI/Button/Button";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import styles from "./SidebarTopBar.module.css";
import { useRef, useState } from "react";
import { useChatStore } from "@/store/useChatStore";
import NewChatModal from "../NewChatModal/NewChatModal";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export default function SidebarTopBar({ search, setSearch }) {
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef(null);
  const { chats } = useChatStore();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const found = chats.some((chat) =>
      `${chat.firstName} ${chat.lastName}`
        .toLowerCase()
        .includes(value.toLowerCase())
    );

    if (!found && value.trim().length > 2) {
      setSearch("");
      inputRef.current?.blur();
      setShowModal(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Avatar firstName="User" lastName="" />
        <Button
          className={styles.login}
          onClick={async () => {
            try {
              const result = await signInWithPopup(auth, googleProvider);
              const user = result.user;
              console.log("Logged in as:", user.displayName);
            } catch (err) {
              console.error("Login failed:", err);
            }
          }}>
          Log in
        </Button>{" "}
      </div>

      <SearchInput
        ref={inputRef}
        placeholder="Search or start new chat"
        value={search}
        onChange={handleSearchChange}
      />

      {showModal && (
        <NewChatModal
          onClose={() => setShowModal(false)}
          defaultName={search}
        />
      )}
    </div>
  );
}
