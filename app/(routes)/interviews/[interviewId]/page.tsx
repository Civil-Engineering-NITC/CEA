import React from "react";
import { PageTopHeading } from "@/components/PageTopHeading";
import styles from "./interviewExp.module.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export default function InterviewExp() {
  return (
    <>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examinations and Learn."
        heading="TESTIMONIALS."
        subHeading="INTERVIEW EXP."
      />

      <div className={styles.container}>
        <div className="profile">
          <div className="profileInfoContainer">
            <div className="imgContainer">
              <img src="" alt="" />
            </div>
            <div className="profileInfo">
              <p className="name">Robert D. Jr.</p>
              <p className="roll">B200642CE</p>
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="infoContainer">
          <div className="heading">
            <div className="headline">
              <p>Interview Experience</p>
              <p>*****</p>
            </div>
            <div className="companyContainer">
              <img src="" alt="" />
              <p>Sprinkler</p>
            </div>
          </div>
          <p className="experience">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            consequatur repellendus consequuntur tenetur deserunt totam? Magnam,
            voluptatibus porro recusandae quae aliquid cum, earum sint corrupti
            repellendus quasi sapiente quod. Facere error aspernatur recusandae
            optio, officiis expedita non pariatur hic voluptatibus porro dolorem
            autem fuga totam at quidem? Ipsum doloribus aspernatur rerum
            temporibus commodi ab molestias sapiente sunt possimus magnam
            accusamus illo voluptatibus magni ipsam eligendi nostrum, harum
            nihil voluptas neque! At, reprehenderit vel voluptas beatae fugiat
            impedit saepe, dicta culpa aperiam quibusdam ipsum accusantium
            aspernatur molestias tempore distinctio soluta ducimus. Cumque,
            ducimus a. Magnam quisquam, repudiandae similique molestias illum
            doloremque.
          </p>
        </div>
      </div>
    </>
  );
}
