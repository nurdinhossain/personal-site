'use client'

import { useForm } from "react-hook-form";

export type FormData = {
    name: string,
    email: string,
    message: string
}

export default function Contact() {
    const { register, handleSubmit } = useForm<FormData>();

    return (
        <p>Hi</p>
    )
}