import React from "react";
import { PageTopHeading } from "@/components/PageTopHeading";
import styles from "./interviewExp.module.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { Heading } from "@/components/Heading";
import { IoStar } from "react-icons/io5";

export default function InterviewExp() {
  const starsArray = Array.from({ length: 3 }, (_, index) => (
    <IoStar
      key={index}
      style={{
        marginRight: "0.3rem",
        marginBottom: "0.5rem",
        marginTop: "0.5rem",
      }}
      size={30}
    />
  ));

  return (
    <div className={styles.mainContainer}>
      {/* <PageTopHeading
        mainHeading="Get to Know about different competitive Examinations and Learn."
        heading="TESTIMONIALS."
        subHeading="INTERVIEW EXP."
      /> */}

      <div className={styles.container}>
        <div className={styles.mobileHeader}>
          <div className={styles.headline}>
            <p className={styles.title}>Interview Experience</p>
            <p className={styles.stars}>{starsArray}</p>
          </div>
          <div className={styles.companyContainer}>
            <img src="/sprinkler.png" alt="" className={styles.companyLogo} />
            <p
              style={{ backgroundColor: "inherit" }}
              className={styles.companyName}
            >
              Sprinkler
            </p>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileInfoContainer}>
            <div className={styles.imgContainer}>
              <img
                src="/robert.png"
                alt="company logo"
                className={styles.image}
              />
            </div>
            <div className={styles.profileInfo}>
              <div className={styles.name}>Robert D. Jr.</div>
              <div className={styles.roll}>B200642CE</div>
              <div>
                <FaLinkedin size={32} color="#A9A9A9" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.heading}>
            <div className={styles.headline}>
              <p className={styles.title}>Interview Experience</p>
              <p className={styles.stars}>{starsArray}</p>
              <div className={styles.moreInfoContainer}>
                <div className={styles.moreInfo}>
                  <p>Email: </p>
                  <p>vg7134@gmailcom</p>
                </div>
                <div className={styles.moreInfo}>
                  <p>Phone: </p>
                  <p>9529164989</p>
                </div>
                <div className={styles.moreInfo}>
                  <p>Package: </p>
                  <p>34.1</p>
                </div>
              </div>
            </div>
            <div className={styles.companyContainer}>
              <img src="/sprinkler.png" alt="" className={styles.companyLogo} />

              <p
                style={{ backgroundColor: "inherit" }}
                className={styles.companyName}
              >
                Sprinkler
              </p>
            </div>
          </div>
          <div className={styles.experience}>
            In this sheet, we cover all the popular companies’ interview
            experiences that will help you to perform well in your upcoming
            interviews. By following this sheet you can also prepare yourself to
            attend any particular company, here we attached the preparation
            guide and asked questions as well. Want to know how successful
            candidates ace their interviews and get their dream job? Then read
            on to find ‘Interview Experiences’ of all product and service-based
            companies from all corners of the world. And prepares yourself for
            your dream company. In this sheet, we cover all the popular
            companies’ interview experiences that will help you to perform well
            in your upcoming interviews. By following this sheet you can also
            prepare yourself to attend any particular company, here we attached
            the preparation guide and asked questions as well. Want to know how
            successful candidates ace their interviews and get their dream job?
            Then read on to find ‘Interview Experiences’ of all product and
            service-based companies from all corners of the world. And prepares
            yourself for your dream company.
          </div>
        </div>
      </div>
    </div>
  );
}
