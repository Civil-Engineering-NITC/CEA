import React from "react";
import InterviewCard from "../interviewCard";
import styles from "./interviewExp.module.css";
import { datas } from "@/data/interviewExpData";

interface IndexDataProps {
  dat: {
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
  }[];
}

function InterviewExp({ dat }: IndexDataProps) {
  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.headings}>
          <h1 className={styles.head}>INTERVIEW.</h1>
          <h3 className={styles.subhead}>EXPERIENCES.</h3>
        </div>
        <div className={styles.cardholder}>
          {datas.map((data) => (
            <InterviewCard
              name={data.name}
              rollno={data.rollno}
              email={data.email}
              phone={data.phone}
              company={data.company}
              desc={data.desc}
              companyLogo={data.companylogo}
              photo={data.photo}
              rating={data.rating}
              linkedin={data.linkedin}
            />
          ))}
        </div>
        <p className={styles.loadmore}>Load More</p>
      </div>
    </>
  );
}

export default InterviewExp;
