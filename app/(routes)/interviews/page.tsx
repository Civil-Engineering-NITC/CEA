import React from "react";
import styles from "@/components/sections/interviewExp.module.css";
import axios from "axios";
import { InterviewExp } from "@prisma/client";
import { DownArrowButton } from "@/components/DownArrowButton";
import { InterviewCard } from "@/components/interviewCard";
import { Header } from "@/components/Header";
import Image from "next/image";
import arrow from "@/public/Arrow 1.png";
import { RightArrowButton } from "@/components/RightArrowButton";
import { PageTopHeading } from "@/components/PageTopHeading";

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
        <PageTopHeading
          mainHeading="Get to Know about different competitive Examination and Learn."
          heading="RESOURCES."
          subHeading="MATERIALS."
        />

        <div className={styles.buttonsDiv}>
          <a href="" className={styles.mainDiv}>
            <div className={styles.buttonDiv}>
              Share Your Own Experience
              <div className={styles.arrowDiv}>
                <Image src={arrow} alt="" className={styles.arrowButton} />
              </div>
            </div>
            <div className={styles.colorDiv}></div>
          </a>
        </div>

        <div className={styles.cardholder}>
          {sortedInterviews.map((data: InterviewExp) => (
            <InterviewCard key={data.id} {...data} />
          ))}
        </div>
      </div>
    </>
  );
}
