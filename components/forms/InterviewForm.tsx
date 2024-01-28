"use client";
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import { ImageUpload } from "../ImageUpload";
import { useState } from "react";
import styles from "./InterviewForm.module.css";
import { Rating } from "react-simple-star-rating";
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
  checked: z.boolean(),
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

  const [checked, setChecked] = useState(false);

  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleChecked = () => {
    setChecked(!checked);
  };

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
      <div className={styles.temp}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <p>Your</p>
            <p className={styles.colorText}>Experience</p>
            <p>Matters</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>
            <div className={styles.inputWrapper}>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter Your Name..."
                name="name"
              />
            </div>
            {errors.name && <p>{`${errors.name?.message}`}</p>}
            <label>Roll No:</label>
            <div className={styles.inputWrapper}>
              <input
                {...register("rollno")}
                type="text"
                placeholder="Enter Your Roll No..."
                name="rollno"
              />
              {errors.rollno && <p>{`${errors.rollno?.message}`}</p>}
            </div>
            <label>Contact No:</label>
            <div className={styles.inputWrapper}>
              <p style={{ marginRight: "1rem" }}>+91</p>
              <input
                {...register("phone")}
                type="text"
                placeholder="Enter Your Contact Number..."
                name="contact"
              />
            </div>
            {errors.phone && <p>{`${errors.phone?.message}`}</p>}
            <label>Email Id:</label>
            <div className={styles.inputWrapper}>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter Your Email Id..."
                name="email"
              />
            </div>
            {errors.email && <p>{`${errors.email?.message}`}</p>}

            <label>Name of Your Company</label>
            <div className={styles.inputWrapper}>
              <input
                {...register("company")}
                type="text"
                placeholder="Enter Name of Your Company..."
                name="company"
              />
            </div>
            {errors.company && <p>{`${errors.company?.message}`}</p>}

            <label>Package</label>
            <div className={styles.inputWrapper}>
              <input
                {...register("packages")}
                type="text"
                placeholder="Enter Your Package..."
                name="package"
              />
            </div>
            {errors.packages && <p>{`${errors.packages?.message}`}</p>}

            <label>Experience</label>
            <div className={styles.inputWrapper}>
              {/* <input
                {...register("desc")}
                type="text"
                placeholder="Please Share Your Experience..."
                name="desc"
              /> */}
              <textarea
                id="desc"
                // cols="30"
                // rows="10"
                {...register("desc")}
                placeholder="Please Share Your Experience..."
                name="desc"
              ></textarea>
            </div>
            {errors.desc && <p>{`${errors.desc?.message}`}</p>}

            <label>Rate Your Experience</label>
            {/* <div className={styles.inputWrapper}>
              <input {...register("rating")} type="text" />
            </div>
            {errors.rating && <p>{`${errors.rating?.message}`}</p>} */}

            <Rating onClick={handleRating} SVGclassName={styles.star} />

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

            <label className={styles.checkContainer}>
              <input
                {...register("checked")}
                type="checkbox"
                checked={checked}
                onChange={handleChecked}
                className={styles.checkBox}
              />
              <span className={styles.checkmark}></span>I hereby confirm that
              all information provided by me is accurate.
            </label>

            <a type="submit" href="" className={styles.mainDiv}>
              <div className={styles.buttonDiv}>SUBMIT</div>
              <div className={styles.colorDiv}></div>
            </a>
          </form>
        </div>
      </div>
    </>
  );
};
