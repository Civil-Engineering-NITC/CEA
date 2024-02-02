import React from "react";
import styles from "./resource.module.css";
import { Card } from "@/components/Card";
import { SearchBar } from "./../../../components/SearchBar";
import { PageTopHeading } from "@/components/PageTopHeading";
import { cardData } from "@/data/fakeResource";
import { BigButton } from "@/components/BigButton";
import axios from "axios";

export default async function Resources() {
  try {
    const info = await axios.get("http://localhost:3000/api/resource");
    const resource = info.data;
    var displayData = resource.slice(0, 2);
  } catch {
    console.log("Data fetch error from backend");
  }

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
