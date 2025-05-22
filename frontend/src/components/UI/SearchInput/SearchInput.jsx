import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import styles from "./SearchInput.module.css";

export default function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className={styles.searchBox}>
      <MagnifyingGlassIcon className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
