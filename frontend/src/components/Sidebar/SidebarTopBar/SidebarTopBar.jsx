import Avatar from "@/components/UI/Avatar/Avatar";
import Button from "@/components/UI/Button/Button";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import styles from "./SidebarTopBar.module.css";

export default function SidebarTopBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Avatar firstName="User" lastName="" />
        <Button className={styles.login}>Log in</Button>
      </div>
      <SearchInput placeholder="Search or start new chat" />
    </div>
  );
}
