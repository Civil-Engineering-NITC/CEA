import React from "react";
import prithvi from "@/public/prithvi.png";
import styles from "./activityId.module.css";
import { ActivityHeader } from "@/components/ActivityHeader";
import { ActivityContent } from "@/components/ActivityContent";

export default function ActivityParticularPage({
  params,
}: {
  params: { resourceId: string };
}) {
  return (
    <>
      <div className={styles.mainDiv}>
        <ActivityHeader />
        <ActivityContent />
      </div>
    </>
  );
}
