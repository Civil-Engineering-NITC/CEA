import { ColouredText } from "./ColouredText";
import styles from "./footer.module.css";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import arrowImg from "@/public/footerArrow 1.png";

export const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <ColouredText text="Civil Engineering Association" size="36px" />
          <p>
            Please write comments if you find any bug in the above programs or
            other ways to solve the same problem.
          </p>
          <div className={styles.socialMediaIconContainer}>
            <FaGithub className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaLinkedin className={styles.icon} />
          </div>
        </div>
        <div className={styles.linksContainer}>
          <p>Quick Links</p>
          <ul>
            <li>Interview Experience</li>
            <li>Competitive Exams</li>
            <li>Resource</li>
          </ul>
        </div>
        <div className={styles.contactContainer}>
          <p>STAY UP TO DATE</p>
          <h3>Get Our Newsletter</h3>
          <input type="email" placeholder="Your Email" />
          <button className={styles.emailInput}>
            <div className={styles.arrowDiv}>
              <Image src={arrowImg} alt="" className={styles.arrowImg} />
            </div>
          </button>
        </div>
      </div>
      {/* <div className={styles.bottom}>
            <ul>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
                <li>Terms and Condition</li>
            </ul>
            <p>CEA NITC</p>
    </div> */}
    </>
  );
};
