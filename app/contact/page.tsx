'use client'

import React from 'react';
import { useForm } from 'react-hook-form';

export default function Page() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  function submitForm(formData: any) {
    // console.log("Form Data:\n", formData)
    fetch("https://cfog4ogx4qowpbin3jdv3ibiyq0cytkd.lambda-url.us-east-2.on.aws/", {
      method: "PUT", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.Name + " | " + (formData.Company == "" ? "No Company Provided" : formData.Company),
        replyto: formData.ReplyTo,
        subject: formData.Subject,
        message: formData.Message
      })
    })
  }

  return (
    <main className="bg-gray-900 py-4 px-2 mb-0 w-full text-white">

      <h1 className="text-4xl font-bold text-center">Contact Us</h1>

      <p className="text-center mt-10">What can we help you with?</p>
      <p className="text-center">We&apos;ll do our best to get back to you as soon as possible.</p>

      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col space-y-4 mt-8 border-2 p-4 mx-auto rounded-xl w-full sm:w-96">
        <input className="input w-full" type="text" placeholder="Your Name" {...register("Name", { required: true, maxLength: 30 })} />
        <input className="input w-full" type="text" placeholder="Reply To (# or @)" {...register("ReplyTo", { required: true, maxLength: 60 })} />
        <input className="input w-full" type="text" placeholder="Your Company" {...register("Company", { maxLength: 50 })} />
        <input className="input w-full" type="text" placeholder="Subject" {...register("Subject", { maxLength: 30, required: true })} />
        <textarea className="input" placeholder="Message" {...register("Message", { required: true, maxLength: 400 })}></textarea>

        <input type="submit" className="btn btn-outline" />
      </form>

    </main>
  )
}
