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

export default function Events() {
  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examination and Learn."
        heading="COMPETITIVE."
        subHeading="EXAMS."
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
