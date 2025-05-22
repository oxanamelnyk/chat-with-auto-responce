import Avatar from "@/components/UI/Avatar/Avatar";
import Button from "@/components/UI/Button/Button";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import styles from "./SidebarTopBar.module.css";
import NewChatModal from "../NewChatModal /NewChatModal";
import { useRef, useState } from "react";
import { useChatStore } from "@/store/useChatStore";

export default function SidebarTopBar() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(true);
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
        <Button className={styles.login}>Log in</Button>
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
