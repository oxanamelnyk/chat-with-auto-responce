import styles from "./NoChatSelected.module.css";

export default function NoChatSelected() {
  return (
    <div className={styles.container}>
      <h1>Welcome to our Comunity!</h1>
      <p> Select a chat from the sidebar to start chatting</p>
    </div>
  );
}
