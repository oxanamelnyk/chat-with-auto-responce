import { useRef, useState } from "react";
import { useChatStore } from "@/store/useChatStore";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import Avatar from "@/components/UI/Avatar/Avatar";
import Button from "@/components/UI/Button/Button";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import NewChatModal from "../NewChatModal/NewChatModal";
import toast from "react-hot-toast";
import styles from "./SidebarTopBar.module.css";

export default function SidebarTopBar({ search, setSearch }) {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
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

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const loggedInUser = result.user;
      setUser(loggedInUser);
      toast.success(`Logged in as ${loggedInUser.displayName}`);
    } catch (err) {
      toast.error("Login failed");
      console.error("Login failed:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Logged out successfully");
    } catch (err) {
      toast.error("Logout failed");
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {user ? (
          <>
            <div className={styles.userInfo}>
              <Avatar firstName={user.displayName?.split(" ")[0]} />
              <span>{user.displayName}</span>
            </div>
            <Button className={styles.login} onClick={handleLogout}>
              Log out
            </Button>
          </>
        ) : (
          <>
            <Avatar firstName="User" />
            <Button className={styles.login} onClick={handleLogin}>
              Log in
            </Button>
          </>
        )}
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
