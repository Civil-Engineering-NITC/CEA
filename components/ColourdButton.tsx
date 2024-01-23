import React from "react";
import styles from "./colouredButton.module.css";
import Image from "next/image";
import arrow from "../public/Arrow 1.png";

interface ColourdButtonProps {
  text: string;
  textSize: string;
  buttonWidth: string;
  buttonHeight: string;
  arrowWidth: string;
  arrowHeight: string;
}

export const ColourdButton: React.FC<ColourdButtonProps> = ({
  text,
  textSize,
  buttonWidth,
  buttonHeight,
  arrowWidth,
  arrowHeight,
}) => {
  return (
    <>
      <a href="" className={styles.mainDiv}>
        <div
          className={styles.buttonDiv}
          style={{
            fontSize: textSize,
            width: buttonWidth,
            height: buttonHeight,
          }}
        >
          {text}
          <div
            className={styles.arrowDiv}
            style={{ width: arrowWidth, height: arrowHeight }}
          >
            <Image
              src={arrow}
              alt=""
              className={styles.arrowButton}
              style={{ width: arrowWidth, height: arrowHeight }}
            />
          </div>
        </div>
        <div className={styles.colorDiv}></div>
      </a>
    </>
  );
};
