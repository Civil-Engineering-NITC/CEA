import React from "react";
import prithvi from "@/public/prithvi.png";
import styles from "./activityId.module.css";

export default function ActivityParticularPage() {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.activeIdMain}>
          <div className={styles.activeIdHead}>
            <img src="" alt="#" />
            <h1>Prithvi ‘24</h1>
          </div>
          <ul>
            <li>
              <h3>Event Date</h3>
              <p>06-02-2024</p>
            </li>
            <li>
              <h3>Reg. Deadline</h3>
              <p>06-02-2024</p>
            </li>
            <li>
              <h3>Venue</h3>
              <p>Aryabhatta Hall</p>
            </li>
            <li>
              <h3>Event Guidelines</h3>
              <p>Download PDF</p>
            </li>
          </ul>
        </div>
        <div className={styles.aboutMain}>
          <img src="/activity.png" alt="" />
          <div className={styles.aboutDiv}>
            <h1>ABOUT</h1>
            <p>
              Potent felis facilisi feugiat volutpat amet. Elementum sed quisque
              eget vulputate et neque, cursus tellus. Adipiscing cras
              pellentesque velit commodo. Et dictumst a cras nisl facilisis
              cursus dolor. Ornare morbi lobortis tristique diam. Adipiscing sed
              at ut sit et, consequat. Ornare diam mattis eu nunc ornare erat.
              Vehicula ultricies orci, nunc vel. Vestibulum lacus, cursus tellus
              consectetur nisl lorem ullamcorper non. Arcu ipsum, congue tortor
              non eget. Fermentum, platea sit mi vulputate et nisl. In ornare
              habitasse tempus, tempor. Purus in id quisque viverra. Potent
              felis facilisi feugiat volutpat amet. Elementum sed quisque eget
              vulputate et neque, cursus tellus. Adipiscing cras pellentesque
              velit commodo. Et dictumst a cras nisl facilisis cursus dolor.
              Ornare morbi lobortis tristique diam. Adipiscing sed at ut sit et,
              consequat. Ornare diam mattis eu nunc ornare erat. Vehicula
              ultricies orci, nunc vel. Vestibulum lacus, cursus tellus
              consectetur nisl lorem.
            </p>
            <div className={styles.buttonDiv}>
              <button>Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
