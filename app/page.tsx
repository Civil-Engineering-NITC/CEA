"use client"

import { UserButton, useUser } from "@clerk/nextjs";
 
export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
 
  if (!isLoaded) {
    return null;
  }
 
  console.log(user);
  if (isSignedIn) {
    return(
      <> 
      <div>Hello {user.emailAddresses[0].emailAddress}!</div>
      <UserButton afterSignOutUrl="/"/>
      </>
    ) 
  }
 
  return <div>Not signed in</div>;
}
 