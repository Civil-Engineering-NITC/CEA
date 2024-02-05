import React from "react";
import styles from "./OurExperienceCard.module.css";
import Image from "next/image";
import boxImg from "../public/bg.jpg";
import linkdin from "@/public/Linkdin.png";
import github from "@/public/github.png";

export const OurExperienceCard: React.FC<any> = (data) => {
  return (
    <>
      <div className={styles.cardDiv}>
        <h3>{}</h3>
        <div className={styles.cardBox}>
          {/* <Image
            src={boxImg}
            alt=""
            style={{ maxWidth: "100%", height: "100%", borderRadius: "0.5rem" }}
            objectFit="cover"
            objectPosition="centre"
          /> */}
          <img
            src={data.link[0].link}
            alt=""
            style={{
              maxWidth: "100%",
              height: "100%",
              borderRadius: "0.5rem",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className={styles.socialDiv}>
          <div className={styles.linkDiv}>
            <Image src={linkdin} alt="" className={styles.circleImage} />
          </div>
          <div className={styles.linkDiv}>
            <Image src={github} alt="" className={styles.circleImage} />
          </div>
        </div>
      </div>
    </>
  );
};
