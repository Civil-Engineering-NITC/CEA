import React from "react";
import Image from "next/image";
import styles from "./rightArrowButton.module.css";
import arrowImg from "@/public/rightArrow.png";

interface RightArrowButtonProps {
  text: string;
  redirectLink: string;
}

export const RightArrowButton: React.FC<RightArrowButtonProps> = ({
  text,
  redirectLink,
}) => {
  return (
    <>
      <a href={redirectLink} className={styles.arrowbutton}>
        {text}
        <Image src={arrowImg} alt="" style={{ background: "transparent" }} />
      </a>
    </>
  );
};
