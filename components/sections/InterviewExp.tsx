import React from "react";
import InterviewCard from "../interviewCard";
import styles from "./interviewExp.module.css";
import { datas } from "@/data/interviewExpData";

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

function InterviewExp() {
  const sortedData = datas.sort(
    (a, b) => parseFloat(b.package) - parseFloat(a.package)
  );
  const displayedData = sortedData.slice(0, 2);
  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.headings}>
          <h1 className={styles.head}>INTERVIEW.</h1>
          <h3 className={styles.subhead}>EXPERIENCES.</h3>
        </div>
        <div className={styles.cardholder}>
          {displayedData.map((data: IndexDataProps) => (
            <InterviewCard {...data} />
          ))}
        </div>
        <p className={styles.loadmore}>Load More</p>
      </div>
    </>
  );
}

export default InterviewExp;
