"use client";

import React from "react";
import styles from "./competitive.module.css";
import { Header } from "../Header";
import Image from "next/image";
import fireImg from "@/public/Fire.png";
import ecl from "@/public/Ellipse 4.png";
import { useEffect } from "react";
import { DownArrowButton } from "../DownArrowButton";
import Link from "next/link";

export const Competitive = () => {
  const handleMouseOver = () => {
    const elementsToPause = document.querySelectorAll(
      `.${styles.rightRows}, .${styles.leftRows}`
    );
    elementsToPause.forEach((element) => {
      element.classList.add(styles.paused);
    });
  };

  const handleMouseOut = () => {
    const elementsToResume = document.querySelectorAll(
      `.${styles.rightRows}, .${styles.leftRows}`
    );
    elementsToResume.forEach((element) => {
      element.classList.remove(styles.paused);
    });
  };
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.strips}>
          <div className={styles.blackStrips}>
            <div className={styles.blackStripDiv}>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
            </div>
            <div className={styles.blackStripDiv}>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
              <Image src={fireImg} alt="" style={{ background: "#313131" }} />
              <div className={styles.blackDots}></div>
              <div className={styles.blackDots}></div>
            </div>
          </div>
          <div className={styles.whiteStrips}>
            <div className={styles.whiteStripDiv}>
              <div className={styles.whiteDots}></div>
              <h1>SOMETHING GREAT</h1>
              <div className={styles.whiteDots}></div>
              <h1>SOMETHING UNBELIEVABLE</h1>
              <div className={styles.whiteDots}></div>
              <h1>SOMETHING GREAT</h1>
              <div className={styles.whiteDots}></div>
              <h1>SOMETHING UNBELIEVABLE</h1>
            </div>
            <div className={styles.whiteStripDiv}>
              <div className={styles.whiteDots}></div>
              <h1>SOMETHING GREAT</h1>
              <div className={styles.whiteDots}></div>
              <h1>SOMETHING UNBELIEVABLE</h1>
              <div className={styles.whiteDots}></div>
              <h1>SOMETHING GREAT</h1>
              <div className={styles.whiteDots}></div>
              <h1>SOMETHING UNBELIEVABLE</h1>
            </div>
          </div>
        </div>
        <div className={styles.competitiveDiv}>
          <Header headingText="COMPETITIVE" subHeadingText="EXAMS." />

          <div className={styles.rowsDiv}>
            <div className={styles.rightRows}>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
            </div>
            <div className={styles.leftRows}>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
            </div>
            <div className={styles.rightRows}>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Bhabha_Atomic_Research_Centre_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Engineers_India_Logo.svg"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/gate.jpg" alt="" className={styles.eclImg} />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img
                  src="/Indian_Space_Research_Organisation_Logo.png"
                  alt=""
                  className={styles.eclImg}
                />
              </div>
              <div
                className={styles.bubble}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="/NPCIL_Logo.png" alt="" className={styles.eclImg} />
              </div>
            </div>
          </div>
        </div>
        <Link href={"/compExam"}>
          <DownArrowButton text="Load More" redirectLink="/compExam" />
        </Link>
      </div>
    </>
  );
};
