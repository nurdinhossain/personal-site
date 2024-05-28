'use client'

import { useForm } from "react-hook-form";
import { useState } from "react";

export type FormData = {
    name: string,
    email: string,
    message: string
}

export default function Contact() {
    const { register, handleSubmit } = useForm<FormData>();
    const [data, setData] = useState("");

    return (
        <div>
            {/* header */}
            <h1 className="bg-green-300 border-4 border-dashed border-slate-900 font-bold text-center text-4xl m-6 p-2">Contact</h1>

            <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>

            <main className="flex flex-row justify-center">
                <form name="contact" className="flex flex-col bg-cyan-300 border-4 border-dashed border-slate-900 space-y-10 w-5/12 m-5 p-4" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} data-netlify={true} netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <input {...register("name")} placeholder="Full name" type="text" name="name" className="h-12 border-4 border-solid border-cyan-700 p-2" />
                    <input {...register("email")} placeholder="Email address" type="email" name="email" className="h-12 border-4 border-solid border-cyan-700 p-2" />
                    <textarea {...register("message")} placeholder="Message" name="message" className="h-80 border-4 border-solid border-cyan-700 p-2" />
                    {
                        data == "" ? 
                        <input type="submit" className="bg-indigo-400 border-4 border-solid border-indigo-700 text-2xl" /> : 
                        <div className="bg-green-400 border-4 border-solid border-green-700 text-2xl text-center">Sent!</div>
                    }
                </form>
            </main>
        </div>
    )
}