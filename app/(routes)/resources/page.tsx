import React from "react";
import styles from "./resource.module.css";
import { Card } from "@/components/Card";
import { SearchBar } from "./../../../components/SearchBar";
import { PageTopHeading } from "@/components/PageTopHeading";
import { cardData } from "@/data/fakeLoadMore";
import { BigButton } from "@/components/BigButton";

export default function Resources() {
  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examination and Learn."
        heading="RESOURCES."
        subHeading="MATERIALS."
      />
      <div className={styles.selection}>
        <div className={styles.bigButtons}>
          <BigButton name="Core Materials" />
          <BigButton name="IT/CS Materials" />
        </div>
        <SearchBar />
      </div>
      <div className={styles.cardContainer}>
        {cardData.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}
