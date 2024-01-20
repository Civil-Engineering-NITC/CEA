"use client";

import InterviewExp from "@/components/sections/InterviewExp";
import styles from "./page.module.css";
import Resource from "@/components/sections/Resource";

import { useUser, UserButton } from "@clerk/nextjs";
import { InterviewForm } from "@/components/forms/InterviewForm";
// import OurExperience from "@/components/sections/OurExperience";
// import Navbar from "@/components/sections/Navbar";

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
        <InterviewForm/>
        {/* <Navbar /> */}
        {/* <OurExperience /> */}
        {/* <Resource /> */}
        {/* <InterviewExp /> */}
      </>
    );
  }

   
  return <div>Not signed in</div>;
}
