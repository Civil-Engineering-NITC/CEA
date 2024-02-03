import React from "react";
import { PageTopHeading } from "@/components/PageTopHeading";
import styles from "./interviewExp.module.css";
import Image from "next/image";

export default function InterviewExp() {
  return (
    <>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examinations and Learn."
        heading="TESTIMONIALS."
        subHeading="INTERVIEW EXP."
      />

      <div className={styles.interviewCard}>
        <div className={styles.heading}>
          <div className={styles.interviewExp}>Interview Experience </div>
          <div>
            <Image
              src="/sprikler.png"
              width={50}
              height={50}
              alt="company logo"
            />
          </div>
        </div>
        <div>
          {/* {" "}
          In this sheet, we cover all the popular companies’ interview
          experiences that will help you to perform well in your upcoming
          interviews. By following this sheet you can also prepare yourself to
          attend any particular company, here we attached the preparation guide
          and asked questions as well. Want to know how successful candidates
          ace their interviews and get their dream job? Then read on to
          find ‘Interview Experiences’ of all product and service-based
          companies from all corners of the world. And prepares yourself for
          your dream company. In this sheet, we cover all the popular companies’
          interview experiences that will help you to perform well in your
          upcoming interviews. By following this sheet you can also prepare
          yourself to attend any particular company, here we attached the
          preparation guide and asked questions as well. Want to know how
          successful candidates ace their interviews and get their dream job?
          Then read on to find ‘Interview Experiences’ of all product and
          service-based companies from all corners of the world. And prepares
          yourself for your dream company. */}
        </div>
      </div>
    </>
  );
}
