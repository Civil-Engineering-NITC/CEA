import React from "react";
import styles from "@/app/(routes)/activity/activity.module.css";
import { Card } from "@/components/Card";
import { SearchBar } from "./../../../components/SearchBar";
import { PageTopHeading } from "@/components/PageTopHeading";
import { Activity } from "@prisma/client";
import { ActivityCard } from "@/components/ActivityCard";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/activity");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  // console.log(res);
  return res.json();
}

export default async function ActivityPage() {
  const info: Activity[] = await getData();
  console.log("************* ", info);
  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="F I N D ."
        heading="OUR OFFERINGS."
        subHeading="EVENTS. WORKSHOPS."
      />
      <div className={styles.imageContainer}>
        <img src="/prithvi.png" className={styles.image} alt="event_img" />
      </div>

      <div className={styles.cardContainer}>
        {info.map((activity: Activity) => (
          <Link href={`/activity/${activity.id}`} key={activity.id}>
            <ActivityCard key={activity.id} {...activity} />
          </Link>
        ))}
      </div>
    </div>
  );
}
