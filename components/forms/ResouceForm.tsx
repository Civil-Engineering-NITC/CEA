// model Resources{
//     id  String  @id @default(uuid())
//     topic String
//     type  String
//     link  ResourceLink[]  @relation("ResourcesToLink")
//   }

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import axios from "axios";
import { ImageUpload } from "../ImageUpload";
import { subtle } from "crypto";

const formSchema = z.object({
  name: z.string().min(1),
  type: z.string().min(1),
  title: z.string().min(1),
  subTitle: z.string().min(1),
  desc: z.string().min(1),
});

type ResourceFormValues = z.infer<typeof formSchema>;

export const ResourceForm: React.FC = () => {
  const [value, setValue] = useState([]);
  const [notesUrl, setNotesUrl] = useState("");
  const [syllabusUrl, setSyllabusUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ResourceFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<ResourceFormValues> = async (data) => {
    const linkData = [
      {
        name: "notesUrl",
        link: notesUrl,
      },
      {
        name: "syllabusUrl",
        link: syllabusUrl,
      },
    ];

    const finalData = {
      ...data,
      linkData,
    };

    console.log(finalData);

    if (notesUrl !== "" && syllabusUrl !== "") {
      try {
        await axios.post("/api/resource", finalData);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("url not uploaded");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <select {...register("name")}>
          <option value="">Select...</option>
          <option value="Study Material">Study Material</option>
        </select>
        {errors.name && <p>{`${errors.name?.message}`}</p>}

        <label>Type</label>
        <select {...register("type")}>
          <option value="">Select...</option>
          <option value="core">core</option>
          <option value="coding">coding</option>
        </select>
        {errors.type && <p>{`${errors.type?.message}`}</p>}

        <label>Subject </label>
        <input {...register("title")} type="text" />
        {errors.title && <p>{`${errors.title?.message}`}</p>}

        <label>Field</label>
        <input {...register("subTitle")} type="text" />
        {errors.subTitle && <p>{`${errors.subTitle?.message}`}</p>}

        <label>Description </label>
        <input {...register("desc")} type="text" />
        {errors.desc && <p>{`${errors.desc?.message}`}</p>}

        <ImageUpload
          onChange={(notesUrl) => setNotesUrl(notesUrl)}
          onRemove={() => setNotesUrl("")}
          text="Upload Notes"
        />
        <ImageUpload
          onChange={(syllabusUrl) => setSyllabusUrl(syllabusUrl)}
          onRemove={() => setSyllabusUrl("")}
          text="Upload Syllabus"
        />

        <input type="submit" />
      </form>
    </>
  );
};
