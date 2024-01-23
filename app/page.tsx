"use client";

import { InterviewExp } from "@/components/sections/InterviewExp";
import { UserButton, useUser } from "@clerk/nextjs";
import styles from "./page.module.css";
import { Resource } from "@/components/sections/Resource";
import { HomePage } from "@/components/sections/HomePage";
import { Navbar } from "@/components/Navbar";
import { Competitive } from "@/components/sections/Competitive";
import { OurExperience } from "@/components/sections/OurExperience";
import { Footer } from "@/components/footer";
import { InterviewForm } from "@/components/forms/InterviewForm";

// import { Competitive } from "@/components/sections/Competitive";

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return (
      <>
        {/* <div>Hello {user.emailAddresses[0].emailAddress}!</div>
      <UserButton afterSignOutUrl="/"/> */}
        <Navbar />
        <div className={styles.margin} style={{ margin: "5rem 4rem" }}></div>
        <HomePage /> 
        <div style={{ marginTop: "10rem" }}></div>
        <OurExperience />
        <div className={styles.margin}></div>
        <Competitive />
        <div className={styles.margin}></div>
        <Resource />
        <div className={styles.margin}></div>
        <InterviewExp />
        <div className={styles.margin}></div>
        <Footer />
        {/* <InterviewForm /> */}
      </>
    );
  }

  return <div>Not signed in</div>;
}
