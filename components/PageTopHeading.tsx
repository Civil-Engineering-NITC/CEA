import React from "react";
import { MainHeading } from "./MainHeading";
import { PageHeading } from "./PageHeading";
import { PageSubHeading } from "./PageSubHeading";
import styles from "./pageTopHeading.module.css";
import Image from "next/image";
import curveStrip from "@/public/Vector 3.png";

interface PageTopHeadingProps {
  mainHeading: string;
  heading: string;
  subHeading: string;
}

export const PageTopHeading: React.FC<PageTopHeadingProps> = ({
  mainHeading,
  heading,
  subHeading,
}) => {
  return (
    <>
      <div className={styles.parentDiv}>
        <Image src={curveStrip} alt="" className={styles.imageDiv} />
        <div className={styles.topContainer}>
          <MainHeading text={mainHeading} />
          <PageHeading text={heading} />
          <PageSubHeading text={subHeading} />
        </div>
      </div>
    </>
  );
};
