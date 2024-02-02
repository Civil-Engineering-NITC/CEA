import React from "react";
import styles from "@/components/sections/interviewExp.module.css";
import axios from "axios";
import { InterviewExp } from "@prisma/client";
import { DownArrowButton } from "@/components/DownArrowButton";
import { InterviewCard } from "@/components/interviewCard";
import { Header } from "@/components/Header";

export default async function InterviewExpPage() {
  try {
    const info = await axios.get("http://localhost:3000/api/interviews");

    console.log(info);

    const interviews = info.data;
    // console.log(interviews[1].link);

    var sortedInterviews = interviews.sort(
      (a: any, b: any) => parseFloat(b.package) - parseFloat(a.package)
    );
    // var displayData = sortedInterviews.slice(0, 2)
  } catch (err) {
    console.log("ERROR WHILE FETCHING DATA");
    console.log(err);
  }

  return (
    <>
      <div className={styles.maindiv}>
        <Header headingText="INTERVIEW." subHeadingText="EXPERIENCES." />
        <div className={styles.cardholder}>
          {sortedInterviews.map((data: InterviewExp) => (
            <InterviewCard key={data.id} {...data} />
          ))}
        </div>
        <DownArrowButton text="Load More" redirectLink="" />
      </div>
    </>
  );
}
