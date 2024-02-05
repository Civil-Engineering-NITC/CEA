"use client";

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
import { useCompExamStore } from "@/app/store/compExam";

export default function CompExam() {
  const { compExam, addCompetitiveExam } = useCompExamStore();

  useEffect(() => {
    if (compExam.length == 0) {
      addCompetitiveExam();
      console.log("ADDED INTERVIEWS");
    }
  }, []);

  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examination and Learn."
        heading="COMPETITIVE."
        subHeading="EXAMS."
      />
      <SearchBar />
      <div className={styles.cardContainer}>
        {compExam.map((exam: CompetitiveExam) => (
          <Link href={`/compExam/${exam.id}`}>
            <Card key={exam.id} {...exam} />
          </Link>
        ))}
      </div>
    </div>
  );
}
