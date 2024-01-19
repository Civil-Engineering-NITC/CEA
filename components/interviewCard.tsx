import React from "react";
import styles from "./interviewCard.module.css";
import icon from "../public/Frame 55.svg";
import Image from "next/image";
import profilePic from "../public/bg.jpg";

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

export const InterviewCard: React.FC<IndexDataProps> = (data) => {
  return (
    <>
      <div className={styles.cardDiv}>
        <div className={styles.profilePic}>
          <Image
            src={data.photo}
            alt=""
            style={{ maxWidth: "100%", height: "100%", borderRadius: "50%" }}
            objectFit="cover"
            objectPosition="centre"
          />
        </div>
        <div className={styles.cardPrimary}>
          <div className={styles.cardImg}>
            <Image src={data.companyLogo} alt="My SVG" />
          </div>
          <h1>Interview Experience</h1>
          <h3>* * * * *</h3>
          <ul>
            <li>
              Please write comments if you find any bug in the above programs or
              other ways to solve the same problem.
            </li>
            <li>
              Please write comments if you find any bug in the above programs or
              other ways to solve the same problem.
            </li>
            <li>
              Please write comments if you find any bug in the above programs or
              other ways to solve the same problem.
            </li>
          </ul>
        </div>
        <div className={styles.cardfooter}>
          <h4>{data.name}</h4>
          <p>{data.rollno}</p>
        </div>
      </div>
    </>
  );
};
