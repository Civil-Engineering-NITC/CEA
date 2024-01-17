"use client";

import InterviewExp from "@/components/sections/InterviewExp";
import styles from "./page.module.css";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function Home() {

  const { isSignedIn, user, isLoaded } = useUser();
 
  if (!isLoaded) {
    return null;
  }
 
  if (isSignedIn) {
    return (
      <>
      <UserButton afterSignOutUrl="/"/>
        <div className={styles.MainPage}></div>
        <InterviewExp />
      </>
    );
  }

   
  return <div>Not signed in</div>;
}
