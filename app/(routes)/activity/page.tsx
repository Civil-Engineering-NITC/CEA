import React, { useEffect } from "react";
import styles from "./loadMore.module.css";
import { Card } from "@/components/Card";
import { SearchBar } from "./../../../components/SearchBar";
import { PageTopHeading } from "@/components/PageTopHeading";
import { Activity } from "@prisma/client";
import { ActivityCard } from "@/components/ActivityCard";
import Link from "next/link";
import { useActivityStore } from "@/app/store/activity";
import { Loader } from "@react-three/drei";

export default async function ActivityPage() {
  const { activities, addActivities } = useActivityStore();

  useEffect(() => {
    if (activities.length == 0) {
      addActivities();
      console.log("ADDED INTERVIEWS");
    }
  }, []);

  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examination and Learn."
        heading="COMPETITIVE."
        subHeading="EXAMS."
      />
      <SearchBar />
      <div className={styles.cardContainer}>
        {activities.length === 0 ? (
          <Loader />
        ) : (
          activities.map((data: Activity) => (
            <Link href={`/activity/${data.id}`} key={data.id}>
              <ActivityCard key={data.id} {...data} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
