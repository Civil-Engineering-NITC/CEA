"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as  z from "zod";
import axios from "axios";
import { CldUploadWidget } from 'next-cloudinary';
import { ImageUpload } from "../ImageUpload";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(1),
    rollno: z.string().min(1),
    email: z.string().min(1),
    phone: z.string().min(1),
    company: z.string().min(1),
    packages: z.string().min(1),
    desc: z.string().min(1),
    rating: z.any(),
})

type InterviewFormValues = z.infer<typeof formSchema>

export const InterviewForm : React.FC = () => {

    const {register,handleSubmit,formState:{errors, isSubmitting},
            reset,
        } = useForm<InterviewFormValues>({
        resolver: zodResolver(formSchema)
    })


    const onSubmit: SubmitHandler<InterviewFormValues> = async (data) => {
        // Convert the 'rating' value from string to integer
        data.rating = parseInt(data.rating, 10);
    
        try {
            await axios.post('/api/interviews', data);
            // Reset the form after a successful submission
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    const [value, setValue] = useState([])
    const [url, setUrl] = useState("")


    
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input 
            {...register("name")}
            type="text" 
            />
            {errors.name && (
                <p>{`${errors.name?.message}`}</p>
            ) }
            <label>Roll No.</label>
            <input 
            {...register("rollno")}
            type="text" 
            />
            {errors.rollno && (
                <p>{`${errors.rollno?.message}`}</p>
            ) }
            <label>Email</label>
            <input 
            {...register("email")}
            type="email"
            />
            {errors.email && (
                <p>{`${errors.email?.message}`}</p>
            ) }
            <label>Phone</label>
            <input 
            {...register("phone")}
            type="text"
            />
            {errors.phone && (
                <p>{`${errors.phone?.message}`}</p>
            ) }
            <label>Company</label>
            <input 
            {...register("company")}
            type="text"
            />
            {errors.company && (
                <p>{`${errors.company?.message}`}</p>
            ) }
            <label>Package</label>
            <input 
            {...register("packages")}
            type="text"
            />
            {errors.packages && (
                <p>{`${errors.packages?.message}`}</p>
            ) }
            <label>Description</label>
            <input 
            {...register("desc")}
            type="text"
            />
            {errors.desc && (
                <p>{`${errors.desc?.message}`}</p>
            ) }
            <label>Rating</label>
            <input 
            {...register("rating")}
            type="text"
            />
            {errors.rating && (
                <p>{`${errors.rating?.message}`}</p>
            ) }

            <ImageUpload 
                // value={value ? [value] : []}
                onChange={(url) => setUrl(url)}
                onRemove={() => setUrl("")}
            />

            <input type="submit" />
        </form>
    </>
    )
}