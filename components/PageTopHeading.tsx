import React from "react";
import { MainHeading } from "./MainHeading";
import { PageHeading } from "./PageHeading";
import { PageSubHeading } from "./PageSubHeading";
import styles from "./pageHeading.module.css";

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
    <div className={styles.topContainer}>
      <MainHeading text={mainHeading} />
      <PageHeading text={heading} />
      <PageSubHeading text={subHeading} />
    </div>
  );
};
