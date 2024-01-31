import React from "react";
import styles from "./interviewCard.module.css";
import icon from "../public/Frame 55.svg";
import Image from "next/image";
import profilePic from "../public/bg.jpg";
import { InterviewExp } from "@prisma/client";

export const InterviewCard: React.FC<InterviewExp> = (data) => {
  return (
    <>
      <div className={styles.cardDiv}>
        <div className={styles.profilePic}>
          <Image
            src={""}
            alt=""
            style={{ maxWidth: "100%", height: "100%", borderRadius: "50%" }}
            objectFit="cover"
            objectPosition="centre"
          />
        </div>
        <div className={styles.cardPrimary}>
          <div className={styles.cardImg}>
            <Image src={""} alt="My SVG" />
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
