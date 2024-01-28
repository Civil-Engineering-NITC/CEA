import React from "react";
import styles from "./loadMore.module.css";
import { Card } from "@/components/Card";
import { SearchBar } from "./../../../components/SearchBar";
import { PageTopHeading } from "@/components/PageTopHeading";
import {
  mainHeading,
  heading,
  subHeading,
  cardData,
} from "@/data/fakeLoadMore";

export default function LoadMore() {
  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading={mainHeading}
        heading={heading}
        subHeading={subHeading}
      />
      <SearchBar />
      <div className={styles.cardContainer}>
        {cardData.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}
