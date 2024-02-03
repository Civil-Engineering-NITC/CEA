import styles from "./activityCard.module.css";

export const ActivityCard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.days}>
          <p>4</p>
          <p>Days</p>
        </div>
        <div className={styles.imgContainer}>
          <img src="/activity.png" alt="" className={styles.img} />
        </div>
        <div className={styles.infoContainer}>
          <p>3D Modelling Workshop</p>
          <p>27th January 2023</p>
          <div className={styles.reg}>
            <p>Fee: ₹ 799</p>
            <p className={styles.button}>Register</p>
          </div>
        </div>
      </div>
    </>
  );
};
