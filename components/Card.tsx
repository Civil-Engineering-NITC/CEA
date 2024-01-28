import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdEngineering } from "react-icons/md";
import { FaArrowRight, FaHome } from "react-icons/fa";

interface CardProps {
  card: {
    id: number;
    type: string;
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    buttonTitle: string;
    color: string;
  };
}

export const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardTop}>
        <div
          className={styles.imageStyle}
          style={{ backgroundColor: card.color, borderRadius: "4px" }}
        >
          {card.type === "engineering" && (
            <MdEngineering size={50} color="white" />
          )}
          {card.type === "business" && <FaHome size={50} color="white" />}
          {card.type === "civil-service" && <FaHome size={50} color="white" />}
          {/* <Image src="/books.png" height={32} width={32} alt={"name"} /> */}
        </div>
        <div className={styles.headingOne}>{card.heading1}</div>
      </div>

      <div className={styles.cardMiddle}>
        <div className={styles.headingTwo}>{card.heading2}</div>
        <div className={styles.middleHeading}>
          <div className={styles.headingThree}>{card.heading3}</div>
          <div className={styles.headingFour}>{card.heading4}</div>
        </div>
      </div>

      <Link
        className={styles.cardBottom}
        style={{ color: card.color }}
        href="#"
      >
        Know More{"  "}
        <FaArrowRight
          style={{ backgroundColor: "inherit", marginLeft: "9px" }}
        />
      </Link>
    </div>
  );
};
