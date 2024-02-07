import React from "react";
import { PageTopHeading } from "@/components/PageTopHeading";
import styles from "./compExam.module.css";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { Icons } from "@/components/Icons";
import { SiBookstack } from "react-icons/si";
import prismadb from "@/lib/prismadb";
import CompExam from "./../page";
import { styled } from "styled-components";

export default async function CompExamMaterial({
  params,
}: {
  params: { compExamId: string };
}) {
  const compExam = await prismadb.competitiveExam.findUnique({
    where: {
      id: params.compExamId,
    },
    include: {
      link: true,
    },
  });

  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examination and Learn."
        heading="COMPETITIVE."
        subHeading="EXAMS."
      />

      <div className={styles.division}>
        <div className={styles.heading}>
          Competitive Exams.\{compExam?.name}
        </div>
        <div className={styles.title}>
          <div
            className={styles.titleImage}
            style={{ backgroundColor: "green" }}
          >
            <Icons
              type=""
              name={compExam?.name ? compExam.name.toString() : ""}
            />
          </div>
          <div className={styles.titleContent}>{compExam?.title}</div>
        </div>
        <div className={styles.content}>
          <div>{compExam?.desc}</div>
          <div className={styles.button}>
            <button className={styles.syllabus}>
              <div style={{ backgroundColor: "inherit" }}>
                <SiBookstack className={styles.buttonIcons} />
              </div>
              <div className={styles.syllabusTitle}>Syllabus</div>
            </button>
            <button className={styles.materials}>
              <div style={{ backgroundColor: "inherit" }}>
                <FaGlobeAmericas className={styles.buttonIcons} />
              </div>
              <div className={styles.materialTitle}>Official Website</div>
            </button>
            <button className={styles.materials}>
              <div style={{ backgroundColor: "inherit" }}>
                <MdOutlineLibraryBooks className={styles.buttonIcons} />
              </div>
              <div className={styles.materialTitle}>Support Materials</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
