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

const formSchema = z.object({
  topic: z.string().min(1),
  type: z.string().min(1),
});

type ResourceFormValues = z.infer<typeof formSchema>;

export const ResourceForm: React.FC = () => {
  const [value, setValue] = useState([]);
  const [url, setUrl] = useState("");

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
        <label>Subject</label>
        <input {...register("topic")} type="text" />
        {errors.topic && <p>{`${errors.topic?.message}`}</p>}

        <label>Topic</label>
        <select {...register("type")}>
          <option value="">Select...</option>
          <option value="core">core</option>
          <option value="coding">coding</option>
        </select>

        {errors.type && <p>{`${errors.type?.message}`}</p>}

        <ImageUpload
          onChange={(url) => setUrl(url)}
          onRemove={() => setUrl("")}
          text="Upload link"
        />

        <input type="submit" />
      </form>
    </>
  );
};
