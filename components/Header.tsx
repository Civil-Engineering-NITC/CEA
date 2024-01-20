import React from "react";
import styles from "./header.module.css";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";

interface HeaderProp {
  headingText: string;
  subHeadingText: string;
}

export const Header: React.FC<HeaderProp> = ({
  headingText,
  subHeadingText,
}) => {
  return (
    <>
      <div className={styles.headerDiv}>
        <Heading text={headingText} />
        <SubHeading text={subHeadingText} />
      </div>
    </>
  );
};
