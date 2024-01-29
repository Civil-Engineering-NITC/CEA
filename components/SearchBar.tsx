import React from "react";
import { CiFilter } from "react-icons/ci";
import styles from "./searchBar.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputContainer}>
        <input
          // {...register("name")}
          type="text"
          className={styles.input}
          placeholder="Search Exams"
          name="name"
        />
      </div>
      <div className={styles.iconContainer}>
        <CiFilter size={30} color="white" />
      </div>
    </div>
  );
};
