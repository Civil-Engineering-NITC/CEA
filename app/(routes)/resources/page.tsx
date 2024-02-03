import React from "react";
import styles from "./resource.module.css";
import { Card } from "@/components/Card";
import { SearchBar } from "./../../../components/SearchBar";
import { PageTopHeading } from "@/components/PageTopHeading";
import { cardData } from "@/data/fakeResource";
import { BigButton } from "@/components/BigButton";
import axios from "axios";
import { Resources } from "@prisma/client";

async function getData() {
  const res = await fetch("http://localhost:3000/api/resource");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  // console.log(res);
  return res.json();
}

export default async function ResourcesPage() {
  const info = await getData();
  console.log("************* ", info);
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
        {info.map((c: Resources) => (
          <Card key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
}
