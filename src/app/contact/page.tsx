'use client'

import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendEmail } from "@/utils/send-email";
import { FormData } from "@/components/formdata";

export default function Contact() {
    const { register, handleSubmit } = useForm<FormData>();
    const [submit, setSubmit] = useState(false);

    function onSubmit(data: FormData) {
        if (data.name !== "" && data.email !== "" && data.message !== "" && data.botDetect === "") {
            sendEmail(data);
            setSubmit(true);
        }
      }

    return (
        <div>
            {/* header */}
            <h1 className="bg-green-300 border-4 border-dashed border-slate-900 font-bold text-center text-4xl m-6 p-2">Contact</h1>

            <main className="flex flex-row justify-center">
                <form className="flex flex-col bg-cyan-300 border-4 border-dashed border-slate-900 space-y-10 w-full lg:w-1/2 m-6 p-4" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("botDetect")} type="email" hidden />
                    <input {...register("name")} placeholder="Full name" type="text" className="h-12 border-4 border-solid border-cyan-700 p-2" />
                    <input {...register("email")} placeholder="Email address" type="email" className="h-12 border-4 border-solid border-cyan-700 p-2" />
                    <textarea {...register("message")} placeholder="Message" className="h-80 border-4 border-solid border-cyan-700 p-2" />
                    {
                        submit == false ? 
                        <input type="submit" className="bg-indigo-400 border-4 border-solid border-indigo-700 text-2xl" /> : 
                        <div className="bg-green-400 border-4 border-solid border-green-700 text-2xl text-center">Sent!</div>
                    }
                </form>
            </main>
        </div>
    )
}