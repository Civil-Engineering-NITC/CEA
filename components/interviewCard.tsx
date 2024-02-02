"use client";

import React, { useEffect, useState } from "react";
import styles from "./interviewCard.module.css";
import icon from "../public/Frame 55.svg";
import Image from "next/image";
import profilePic from "../public/bg.jpg";
import { InterviewExp } from "@prisma/client";

export const InterviewCard: React.FC<any> = (data) => {
  const [para, setPara] = useState("");

  useEffect(() => {
    if (data.desc.length > 20) {
      setPara(data.desc.slice(0, 500 - 3) + "...");
    } else {
      setPara(data.desc);
    }
  }, [data.desc]);

  console.log(data);

  return (
    <>
      <div className={styles.cardDiv}>
        <div className={styles.profilePic}>
          <img src={data.link[0].link} alt="" />
        </div>
        <div className={styles.cardPrimary}>
          <div className={styles.cardImg}>
            <img src={data.link[1].link} alt="" />
            <p>{data.company}</p>
          </div>
          <h1>Interview Experience</h1>
          <h3>* * * * *</h3>
          <p>{para}</p>
        </div>
        <div className={styles.cardfooter}>
          <h4>{data.name}</h4>
          <p>{data.rollno}</p>
        </div>
      </div>
    </>
  );
};
