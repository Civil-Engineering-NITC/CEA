"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { ImageUpload } from "../ImageUpload";

// model Events{
//     id  String @id  @default(uuid())
//     regLink String
//     link Link[] @relation("EventsToLink")
//     desc  String
//   }

const formSchema = z.object({
  name: z.string().min(1),
  desc: z.string().min(1),
  type: z.string().min(1),
});

type ActivityFormValues = z.infer<typeof formSchema>;

export const ActivityForm: React.FC = () => {
  const [url, setUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ActivityFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<ActivityFormValues> = async (data) => {
    const linkData = [
      {
        name: "url",
        link: url,
      },
    ];

    const finalData = {
      ...data,
      linkData,
    };

    console.log(finalData);

    if (url !== "") {
      try {
        await axios.post("/api/activity", finalData);
        // reset();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name")} type="text" />
        {errors.name && <p>{`${errors.name?.message}`}</p>}
        <label>Description</label>
        <input {...register("desc")} type="text" />
        {errors.desc && <p>{`${errors.desc?.message}`}</p>}

        <label>Type of Activity</label>
        <select {...register("type")}>
          <option value="">Select...</option>
          <option value="event">event</option>
          <option value="workshop">workshop</option>
          <option value="lecture">lecture</option>
        </select>

        {errors.type && <p>{`${errors.type?.message}`}</p>}

        <ImageUpload
          onChange={(url) => setUrl(url)}
          onRemove={() => setUrl("")}
          text="Upload Your Photo"
        />

        <input type="submit" />
      </form>
    </>
  );
};
