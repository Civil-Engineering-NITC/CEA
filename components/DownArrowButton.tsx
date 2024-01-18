import React from "react";
import styles from "./downArrowButton.module.css";
import Image from "next/image";
import arrowImg from "@/public/DownArrow.svg";

interface DownArrowButtonProps {
  text: string;
}

export const DownArrowButton: React.FC<DownArrowButtonProps> = ({ text }) => {
  return (
    <>
      <a href="" className={styles.arrowbutton}>
        {text}
        <Image src={arrowImg} alt="" />
      </a>
    </>
  );
};
