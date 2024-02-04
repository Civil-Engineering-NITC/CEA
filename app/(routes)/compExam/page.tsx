import React, { useState, useEffect } from "react";
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
import { CompetitiveExam } from "@prisma/client";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/compExam");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  // console.log(res);
  return res.json();
}

export default async function CompExam() {
  const info = await getData();
  console.log("************* ", info);

  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examination and Learn."
        heading="COMPETITIVE."
        subHeading="EXAMS."
      />
      <SearchBar />
      <div className={styles.cardContainer}>
        {info.map((exam: CompetitiveExam) => (
          <Link href={`/compExam/${exam.id}`}>
            <Card key={exam.id} {...exam} />
          </Link>
        ))}
      </div>
    </div>
  );
}
