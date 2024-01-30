import React from "react";
import { InterviewCard } from "../interviewCard";
import styles from "./interviewExp.module.css";
import { datas } from "@/data/interviewExpData";
import { Heading } from "../Heading";
import { SubHeading } from "../SubHeading";
import { Header } from "../Header";
import { DownArrowButton } from "../DownArrowButton";
import axios from "axios";

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

export const InterviewExp = async () => {
  try {
    const info = await axios.get("http://localhost:3000/api/interviews");
    console.log(info);

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
              <InterviewCard key={data.name} {...data} />
            ))}
          </div>
          <DownArrowButton text="Load More" redirectLink="" />
        </div>
      </>
    );
  } catch (err) {
    console.log("ERROR WHILE FETCHING DATA");
    console.log(err);
    // You might return a different JSX structure here based on the error
    return (
      <div style={{ color: "white" }}>
        Error loading data. Please try again later.
      </div>
    );
  }
};
