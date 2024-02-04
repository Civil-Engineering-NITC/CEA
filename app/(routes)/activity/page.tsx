import React from "react";
import styles from "./loadMore.module.css";
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
  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examination and Learn."
        heading="COMPETITIVE."
        subHeading="EXAMS."
      />
      <SearchBar />
      <div className={styles.cardContainer}>
        {info.map((activity: Activity) => (
          <Link href={`/activity/${activity.id}`}>
            <ActivityCard key={activity.id} {...activity} />
          </Link>
        ))}
      </div>
    </div>
  );
}
