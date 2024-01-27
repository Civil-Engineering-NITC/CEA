import React from "react";
import styles from "./loadMore.module.css";
import {
  mainHeading,
  heading,
  subHeading,
  cardData,
} from "@/data/fakeLoadMore";
import { MainHeading } from "@/components/MainHeading";
import { PageHeading } from "@/components/PageHeading";
import { PageSubHeading } from "@/components/PageSubHeading";
import { Card } from "@/components/Card";

export default function LoadMore() {
  return (
    <>
      <div className={styles.topContainer}>
        <MainHeading text={mainHeading} />
        <PageHeading text={heading} />
        <div className={styles.gradientBox}>
          <div className={styles.gradientLeftBox}></div>
          <PageSubHeading text={subHeading} />
          <div className={styles.gradientRightBox}></div>
        </div>
      </div>

      <div className={styles.cardContainer}>
        {cardData.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    </>
  );
}
