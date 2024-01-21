import React from "react";
import styles from "./homePage.module.css";
import Image from "next/image";
import backgroundImg from "@/public/backgroundImg.png";
import man from "@/public/man.svg";
import scope from "@/public/scope.png";
import books from "@/public/books.png";
import earth from "@/public/earth.png";
import { Heading } from "@/components/Heading";
import { ColouredText } from "@/components/ColouredText";
import { ColourdButton } from "../ColourdButton";
import { RightArrowButton } from "../RightArrowButton";
import { CubeCanvas } from "../CubeCanvas";

export const HomePage = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.cubes}>
          <div className={styles.topCubes}>
            <CubeCanvas img={man} />
            <CubeCanvas img={scope} />
          </div>
          <div className={styles.bottomCubes}>
            <CubeCanvas img={books} />
            <CubeCanvas img={earth} />
          </div>
        </div>
        <div className={styles.backgroundImg}>
          <div className={styles.gridBackground}></div>
        </div>
        <div className={styles.wrapperDiv}>
          <div className={styles.headingDiv}>
            <h1>CIVIL</h1>
            <h2>ENGINEERING</h2>
          </div>
          <div className={styles.colorText}>
            <ColouredText text="ASSOCIATION" size="5rem" />
          </div>
          <p>
            We will cook some powerful as well as potential resources for the
            aspiring Civil Engineering Student
          </p>
          <div className={styles.buttonDiv}>
            <ColourdButton
              text="Let’s Get Started"
              redirectLink=""
              size="1.5rem"
            />
            <RightArrowButton text="Explore Teams" redirectLink="" />
          </div>
        </div>
      </div>
    </>
  );
};
