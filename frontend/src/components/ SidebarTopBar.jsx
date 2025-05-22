import styles from "./SidebarTopBar.module.css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function SidebarTopBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img
          src="https://ui-avatars.com/api/?name=User&rounded=true&size=36"
          alt="User avatar"
          className={styles.avatar}
        />
        <button className={styles.login}>Log in</button>
      </div>

      <div className={styles.searchBox}>
        <MagnifyingGlassIcon className={styles.icon} />
        <input
          type="text"
          placeholder="Search or start new chat"
          className={styles.input}
        />
      </div>
    </div>
  );
}
