"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as  z from "zod";
import axios from "axios";

const formSchema = z.object({
    subject: z.string().min(1),
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
            await axios.post('/api/classNotes', data);
            reset();
        } catch (error) {
            console.log(error);
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
            <input type="submit" />
        </form>
    </>
    )
}