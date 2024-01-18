import React from "react";
import { InterviewCard } from "../interviewCard";
import styles from "./interviewExp.module.css";
import { datas } from "@/data/interviewExpData";
import { Heading } from "../Heading";
import { SubHeading } from "../SubHeading";
import { Header } from "../Header";

interface IndexDataProps {
  name: string;
  rollno: string;
  email: string;
  phone: string;
  company: string;
  desc: string;
  companyLogo: any;
  photo: any;
  rating: number;
  linkedin: string;
}

export const InterviewExp = () => {
  const sortedData = datas.sort(
    (a, b) => parseFloat(b.package) - parseFloat(a.package)
  );
  const displayedData = sortedData.slice(0, 2);
  return (
    <>
      <div className={styles.maindiv}>
        <Header headingText="INTERVIEW." subHeadingText="EXPERIENCES." />
        <div className={styles.cardholder}>
          {displayedData.map((data: IndexDataProps) => (
            <InterviewCard {...data} />
          ))}
        </div>
        <a href="" className={styles.loadmore}>
          Load More
        </a>
      </div>
    </>
  );
};
