import React from "react";
import { InterviewCard } from "../interviewCard";
import styles from "./interviewExp.module.css";
import { datas } from "@/data/interviewExpData";
import { Heading } from "../Heading";
import { SubHeading } from "../SubHeading";
import { Header } from "../Header";
import { DownArrowButton } from "../DownArrowButton";
import axios from "axios";
import { InterviewExp } from "@prisma/client";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/interviews");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const InterviewExperience = async () => {
  const info = await getData();

  // console.log(info);

  // const interviews = info.data;
  // console.log(interviews[1].link);

  const sortedInterviews = info.sort(
    (a: any, b: any) => parseFloat(b.package) - parseFloat(a.package)
  );
  var displayData = sortedInterviews.slice(0, 2);

  // console.log(displayData);

  return (
    <>
      <div className={styles.maindiv}>
        <Header headingText="INTERVIEW." subHeadingText="EXPERIENCES." />
        <div className={styles.seperator}></div>
        <div className={styles.cardholder}>
          {displayData.map((data: InterviewExp) => (
            <Link href={`/interviews/${data.id}`} key={data.id}>
              <InterviewCard key={data.id} {...data} />
            </Link>
          ))}
        </div>
        <DownArrowButton text="Load More" redirectLink="" />
      </div>
    </>
  );
};
