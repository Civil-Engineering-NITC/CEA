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

export const InterviewExperience = async () => {
  try {
    const info = await axios.get("http://localhost:3000/api/interviews");

    console.log(info);

    const interviews = info.data;
    // console.log(interviews[1].link);

    const sortedInterviews = interviews.sort(
      (a: any, b: any) => parseFloat(b.package) - parseFloat(a.package)
    );
    var displayData = sortedInterviews.slice(0, 2);
  } catch (err) {
    console.log("ERROR WHILE FETCHING DATA");
    console.log(err);
  }

  return (
    <>
      <div className={styles.maindiv}>
        <Header headingText="INTERVIEW." subHeadingText="EXPERIENCES." />
        <div className={styles.cardholder}>
          {displayData.map((data: InterviewExp) => (
            <InterviewCard key={data.id} {...data} />
          ))}
        </div>
        <DownArrowButton text="Load More" redirectLink="" />
      </div>
    </>
  );
};
