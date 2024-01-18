import React from "react";
import styles from "./resource.module.css";
import { ResourceCard } from "../ResourceCard";

export const Resource = () => {
  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.headings}>
          <h1>RESOURCE.</h1>
          <h3>MATERIALS.</h3>
        </div>
        <div className={styles.cardholder}>
          <ResourceCard title="CORE" />
          <ResourceCard title="CODING" />
        </div>
        <a href="" className={styles.loadmore}>
          Load More
        </a>
      </div>
    </>
  );
};

export default Resource;
