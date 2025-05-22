import { forwardRef } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import styles from "./SearchInput.module.css";

function SearchInput({ value, onChange, placeholder }, ref) {
  return (
    <div className={styles.searchBox}>
      <MagnifyingGlassIcon className={styles.icon} />
      <input
        ref={ref}
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default forwardRef(SearchInput);
