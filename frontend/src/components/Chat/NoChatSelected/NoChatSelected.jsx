import styles from "./NoChatSelected.module.css";

export default function NoChatSelected() {
  return (
    <div className={styles.wraper}>
      <h1 className={styles.title}>Welcome to our Comunity!</h1>
      <p className={styles.descr}> Select a chat from the sidebar to start chatting</p>
    </div>
  );
}
