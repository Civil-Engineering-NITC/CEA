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
          <h1>INTERVIEW.</h1>
          <h3>EXPERIENCES.</h3>
        </div>
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
}

export default InterviewExp;
