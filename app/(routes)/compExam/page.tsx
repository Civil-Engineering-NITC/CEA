import React from "react";
import styles from "../loadMore/loadMore.module.css";
import { Card } from "@/components/Card";
import { SearchBar } from "./../../../components/SearchBar";
import { PageTopHeading } from "@/components/PageTopHeading";
import {
  mainHeading,
  heading,
  subHeading,
  cardData,
} from "@/data/fakeLoadMore";
import axios from "axios";

export default async function CompExam() {
  try {
    const info = await axios.get("http://localhost:3000/api/compExam");
    const compExam = info.data;
    var displayData = compExam.slice(0, 2);
  } catch {
    console.log("Data fetch error from backend");
  }

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
