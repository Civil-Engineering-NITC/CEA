"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import { ImageUpload } from "../ImageUpload";
import { useState } from "react";
import { toast } from "react-toastify";

const formSchema = z.object({
  name: z.string().min(1),
  rollno: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  company: z.string().min(1),
  packages: z.string().min(1),
  desc: z.string().min(1),
  rating: z.any(),
});

type InterviewFormValues = z.infer<typeof formSchema>;

export const InterviewForm: React.FC = () => {
  const notifySuccess = () =>
    toast.success("Successfully Submitted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = () =>
    toast.error("Some error has occured", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifyWarning = () =>
    toast.warn(
      "You have either not uploaded your Photo or company logo. Please Upload",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );

  const [value, setValue] = useState([]);
  const [profileUrl, setProfileUrl] = useState("");
  const [logoUrl, setLogoUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InterviewFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<InterviewFormValues> = async (data) => {
    // Convert the 'rating' value from string to integer
    data.rating = parseInt(data.rating, 10);
    // console.log(profileUrl);
    // console.log(logoUrl);
    // console.log(data)

    const linkData = [
      {
        name: "profileUrl",
        link: profileUrl,
      },
      {
        name: "logoUrl",
        link: logoUrl,
      },
    ];

    const finalData = {
      ...data,
      linkData,
    };

    console.log(finalData);

    if (profileUrl !== "" && logoUrl !== "") {
      // console.log("FOUNDDDDDDDDDD!!!!!!!!!!!");

      try {
        await axios.post("/api/interviews", finalData);
        // Reset the form after a successful submission
        notifySuccess();
      } catch (error) {
        console.log(error);
        notifyError();
      }
    } else {
      console.log("profile or logo url missing");
      notifyWarning();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name")} type="text" />
        {errors.name && <p>{`${errors.name?.message}`}</p>}
        <label>Roll No.</label>
        <input {...register("rollno")} type="text" />
        {errors.rollno && <p>{`${errors.rollno?.message}`}</p>}
        <label>Email</label>
        <input {...register("email")} type="email" />
        {errors.email && <p>{`${errors.email?.message}`}</p>}
        <label>Phone</label>
        <input {...register("phone")} type="text" />
        {errors.phone && <p>{`${errors.phone?.message}`}</p>}
        <label>Company</label>
        <input {...register("company")} type="text" />
        {errors.company && <p>{`${errors.company?.message}`}</p>}
        <label>Package</label>
        <input {...register("packages")} type="text" />
        {errors.packages && <p>{`${errors.packages?.message}`}</p>}
        <label>Description</label>
        <input {...register("desc")} type="text" />
        {errors.desc && <p>{`${errors.desc?.message}`}</p>}
        <label>Rating</label>
        <input {...register("rating")} type="text" />
        {errors.rating && <p>{`${errors.rating?.message}`}</p>}

        <ImageUpload
          onChange={(imageUrl) => setProfileUrl(imageUrl)}
          onRemove={() => setProfileUrl("")}
          text="Upload Your Photo"
        />

        <ImageUpload
          onChange={(logoUrl) => setLogoUrl(logoUrl)}
          onRemove={() => setLogoUrl("")}
          text="Upload Your Company Logo"
        />

        <input type="submit" />
      </form>
    </>
  );
};
