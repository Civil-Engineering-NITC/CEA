import React from "react";
import styles from "../loadMore/loadMore.module.css";
import resourceStyle from "./resource.module.css";
import { Card } from "@/components/Card";
import { SearchBar } from "./../../../components/SearchBar";
import { PageTopHeading } from "@/components/PageTopHeading";
import {
  mainHeading,
  heading,
  subHeading,
  cardData,
} from "@/data/fakeLoadMore";

export default function Resources() {
  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examination and Learn."
        heading="RESOURCES."
        subHeading="MATERIALS."
      />
      <div className={resourceStyle.selection}>
        <div className={resourceStyle.buttonSection}>
          <div className={resourceStyle.coreButton}>Core Materials</div>
          <div className={resourceStyle.itButton}>IT/CS Materials</div>
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
