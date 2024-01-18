import React from "react";
import Image from "next/image";
import styles from "./rightArrowButton.module.css";
import arrowImg from "@/public/RightArrow.svg";

interface RightArrowButtonProps {
  text: string;
}

export const RightArrowButton: React.FC<RightArrowButtonProps> = ({ text }) => {
  return (
    <>
      <a href="" className={styles.arrowbutton}>
        {text}
        <Image src={arrowImg} alt="" />
      </a>
    </>
  );
};
