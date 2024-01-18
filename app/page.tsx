"use client";

import { InterviewExp } from "@/components/sections/InterviewExp";
import { UserButton, useUser } from "@clerk/nextjs";
import styles from "./page.module.css";
import { Resource } from "@/components/sections/Resource";
// import { HomePage } from "@/components/sections/HomePage";
// import { OurExperience } from "@/components/sections/OurExperience";
import { Navbar } from "@/components/Navbar";

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
        <div className={styles.MainPage}></div>
        <Navbar />
        {/* <HomePage /> */}
        {/* <OurExperience /> */}
        {/* <Resource /> */}
        <InterviewExp />
      </>
    );
  }

  return <div>Not signed in</div>;
}
