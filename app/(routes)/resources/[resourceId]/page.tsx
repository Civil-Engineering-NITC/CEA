import React from "react";
import { PageTopHeading } from "@/components/PageTopHeading";
import styles from "./resourceMaterial.module.css";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { SiBookstack } from "react-icons/si";

export default function ResourceMaterial() {
  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examination and Learn."
        heading="RESOURCES."
        subHeading="MATERIALS."
      />

      <div className={styles.division}>
        <div className={styles.heading}>
          Resources Materials.\Geotechnical Engineering
        </div>
        <div className={styles.title}>
          <div className={styles.titleImage}>
            <MdOutlineLibraryBooks className={styles.icons} />
          </div>
          <div className={styles.titleContent}>Foundation Engineering</div>
        </div>
        <div className={styles.content}>
          <div>
            CAT is a national level MBA entrance exam for admission to 21 IIMs,
            8 IITs, and 1000+ other b-schools in India. It is conducted once
            every year by the IIMs in online CBT mode at 400+ test centers in
            155 cities of India. This year, CAT 2023 exam is scheduled for Nov
            26, 2023. Registration for CAT 2023 is closed by IIM Lucknow on Sep
            21. Now, CAT 2023 admit card is to be issued at iimcat.ac.in on Nov
            7 for the 3.3 lakh registered candidates.
          </div>
          <div>
            CAT is a national level MBA entrance exam for admission to 21 IIMs,
            8 IITs, and 1000+ other b-schools in India. It is conducted once
            every year by the IIMs in online CBT mode at 400+ test centers in
            155 cities of India. This year, CAT 2023 exam is scheduled for Nov
            26, 2023. Registration for CAT 2023 is closed by IIM Lucknow on Sep
            21. Now, CAT 2023 admit card is to be issued at iimcat.ac.in on Nov
            7 for the 3.3 lakh registered candidates.
          </div>
        </div>
      </div>

      <div className={styles.button}>
        <button className={styles.syllabus}>
          <div>
            <SiBookstack className={styles.buttonIcons} />
          </div>
          <div className={styles.syllabusTitle}>Syllabus</div>
        </button>
        <button className={styles.materials}>
          <div>
            <MdOutlineLibraryBooks className={styles.buttonIcons} />
          </div>
          <div className={styles.materialTitle}>Support Materials</div>
        </button>
      </div>
    </div>
  );
}
