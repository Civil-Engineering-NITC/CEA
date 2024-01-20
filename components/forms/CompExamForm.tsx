"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as  z from "zod";
import axios from "axios";

const formSchema = z.object({
    name: z.string().min(1),
    desc: z.string().min(1)
})

type CompExamFormValues = z.infer<typeof formSchema>

export const InterviewForm : React.FC = () => {

    const {register,handleSubmit,formState:{errors, isSubmitting},
            reset,
        } = useForm<CompExamFormValues>({
        resolver: zodResolver(formSchema)
    })


    const onSubmit: SubmitHandler<CompExamFormValues> = async (data) => {
        try {
            await axios.post('/api/compExam', data);
            reset();
        } catch (error) {
            console.log(error);
        }
    };
    
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
            <label>Description</label>
            <input 
            {...register("desc")}
            type="text"
            />
            {errors.desc && (
                <p>{`${errors.desc?.message}`}</p>
            ) }

            <input type="submit" />
        </form>
    </>
    )
}