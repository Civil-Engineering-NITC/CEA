"use client";

import { ActivityForm } from "@/components/forms/ActivityForm";
import { ClassNotesForm } from "@/components/forms/ClassNoteForm";
import { CodingForm } from "@/components/forms/CodingForm";
import { CompExamForm } from "@/components/forms/CompExamForm";
import { ResourceForm } from "@/components/forms/ResouceForm";
import { UserButton, useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";

// interface FormProps{
//     kind : string;
// }

export default function Form({
  searchParams,
}: {
  searchParams: {
    kind: string;
  };
}) {
  const [mount, setMount] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const email = user?.emailAddresses[0].emailAddress;

      if (email === process.env.NEXT_PUBLIC_MASTER) {
        setMount(true);
      }
    }
  }, [isSignedIn, isLoaded, user]);

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn && mount) {
    console.log(mount);
    console.log(user?.emailAddresses[0].emailAddress);
    if (searchParams.kind === "classNote") {
      return <ClassNotesForm />;
    } else if (searchParams.kind === "coding") {
      return <CodingForm />;
    } else if (searchParams.kind === "compExam") {
      return <CompExamForm />;
    } else if (searchParams.kind === "activity") {
      return <ActivityForm />;
    } else if (searchParams.kind === "resource") {
      return <ResourceForm />;
    }
    // Render the rest of your component content here
  } else {
    return (
      <>
        <p>You are not authenticated to view this page</p>
      </>
    );
  }
}

// export default function Form(
// //     {
// //     searchParams,
// // }:{
// //     searchParams :{
// //         kind : string,
// //     }
// // }
// ) {

//   const [mount, setMount] = useState(false);
//   const { isSignedIn, user, isLoaded } = useUser();

//   if(!isLoaded){
//     return null;
//   }

//   if(isSignedIn){

//     const email = user?.emailAddresses[0].emailAddress;

//     if(email == process.env.NEXT_PUBLIC_MASTER){
//         setMount(true);
//     }
//     console.log(mount)
//     console.log(email);

//     //     if(mount){
//     //         if( searchParams.kind === "classNote"){
//     //     return (
//     //         <ClassNotesForm/>
//     //     )
//     // }else if( searchParams.kind === "coding"){
//     //     return (
//     //         <CodingForm/>
//     //     )
//     // }else if( searchParams.kind === "compExam"){
//     //     return (
//     //         <CompExamForm/>
//     //         )
//     //     }else if( searchParams.kind === "activity"){
//     //         return (
//     //             <ActivityForm/>
//     //     )
//     // }
// }else{
//     return(
//         <>
//         <p>You are not authenticated to view this page</p>
//         </>
//     )
// }
// }
// // }
