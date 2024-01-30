import { InterviewExp } from "@/components/sections/InterviewExp";
import { UserButton, currentUser, useUser } from "@clerk/nextjs";
import styles from "./page.module.css";
import { Resource } from "@/components/sections/Resource";
import { HomePage } from "@/components/sections/HomePage";
import { Navbar } from "@/components/Navbar";
import { Competitive } from "@/components/sections/Competitive";
import { OurExperience } from "@/components/sections/OurExperience";
import { Footer } from "@/components/footer";
import { InterviewForm } from "@/components/forms/InterviewForm";
import { Rating } from "react-simple-star-rating";
import LoadMore from "./(routes)/loadMore/page";
import ResourceMaterial from "./(routes)/resources/[resourceId]/page";
import Resources from "./(routes)/resources/page";

// import { Competitive } from "@/components/sections/Competitive";

export default async function Home() {
  // const { isSignedIn, user, isLoaded } = useUser();
  const user = await currentUser();
  return (
    <>
      {/* <div>Hello {user?.emailAddresses[0].emailAddress}!</div> */}
      <UserButton afterSignOutUrl="/" />
    </>
  );
}
