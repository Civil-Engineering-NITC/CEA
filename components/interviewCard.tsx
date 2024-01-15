import React from "react";
import styles from "./interviewCard.module.css";
import icon from "../public/Frame 55.svg";
import Image from "next/image";
import profilePic from "../public/bg.jpg";

function InterviewCard({
  name,
  rollno,
  linkedin,
  rating,
  photo,
  companyLogo,
  desc,
  company,
  phone,
  email,
}) {
  return (
    <>
      {/* <div className={styles.cardMainDiv}> */}
      <div className={styles.cardDiv}>
        <div className={styles.profilePic}>
          <Image
            src={photo}
            alt=""
            style={{ maxWidth: "100%", height: "100%", borderRadius: "50%" }}
            objectFit="cover"
            objectPosition="centre"
          />
        </div>
        <div className={styles.cardPrimary}>
          <div className={styles.cardImg}>
            <Image src={companyLogo} alt="My SVG" />
          </div>
          <h1>Interview Experience</h1>
          <h3>* * * * *</h3>
          <ul className={styles.cardlist}>
            <li className={styles.cardlistli}>
              Please write comments if you find any bug in the above programs or
              other ways to solve the same problem.
            </li>
            <li className={styles.cardlistli}>
              Please write comments if you find any bug in the above programs or
              other ways to solve the same problem.
            </li>
            <li className={styles.cardlistli}>
              Please write comments if you find any bug in the above programs or
              other ways to solve the same problem.
            </li>
          </ul>
        </div>
        <div className={styles.cardfooter}>
          <h4 className={styles.cardname}>{name}</h4>
          <p className={styles.cardname}>{rollno}</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default InterviewCard;
