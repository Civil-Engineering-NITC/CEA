"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import * as  z from "zod";
import axios from "axios";
import { ImageUpload } from "../ImageUpload";

const formSchema = z.object({
    subject: z.string().min(1),
})

type CompExamFormValues = z.infer<typeof formSchema>

export const ClassNotesForm : React.FC = () => {

    const [value, setValue] = useState([])
    const [url, setUrl] = useState("")

    const {register,handleSubmit,formState:{errors, isSubmitting},
            reset,
        } = useForm<CompExamFormValues>({
        resolver: zodResolver(formSchema)
    })


    const onSubmit: SubmitHandler<CompExamFormValues> = async (data) => {

        const linkData = [
            {
                name: "examUrl",
                link: url
            },
        ]

        const finalData = {
            ...data,
            linkData
        }

        console.log(finalData);
        
        if( url !== ""){
            try {
                await axios.post('/api/classNotes', finalData);
                reset();
            } catch (error) {
                console.log(error);
            }
        }else{
            console.log("all url not uploaded");
        }
    };
    
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>subject</label>
            <input 
            {...register("subject")}
            type="text" 
            />
            {errors.subject && (
                <p>{`${errors.subject?.message}`}</p>
            ) }

            <ImageUpload
                onChange={(url) => setUrl(url)}
                onRemove={() => setUrl("")}
                text="Upload Exam Photo"
            />
            <input type="submit" />
        </form>
    </>
    )
}