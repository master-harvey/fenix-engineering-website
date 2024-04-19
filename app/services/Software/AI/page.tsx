'use client'

import Image from 'next/image'
import Link from 'next/link'

import cdk from '@/public/cdk-logo-small.png'

import { FaImage } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";

export default function Page() {
  return (
    <main className="">
      <div className="bg-ai bg-left-top bg-no-repeat py-8 px-4 w-full bg-black">
        <div className="bg-gray-800 p-8 mx-auto rounded-xl justify-center w-full max-w-lg">
          <h1 className="text-4xl font-bold text-center p-4">Supercharge Your Workflow with AI</h1>
          <p className="mt-3">These advanced tools are designed to streamline operations, enhance productivity, and drive innovation across industries.</p>
          <Link href="/contact" className="btn btn-outline bg-red-500 text-black hover:text-white hover:bg-black mt-6 w-full">How smart can your business be?</Link>
        </div>
      </div>


      <div className="bg-gray-700 p-2 py-4 md:px-4">
        <p className="text-3xl font-bold text-center">Artificial Intelligence At Work</p>
        <p className="max-w-6xl mx-auto px-10">While many companies claim to be approaching a true Artificial General Intelligence (AGI) that will express human traits with theoretically boundless throughput and memory, the current state of AI is more like intelligent microservices. Integrators like Master&apos;s Automation can use different inference models as black-box style transformers to provide value added services in the form of model swarms and by chaining the transformations of different models together. Here are some ways that we have integrated inference models for our clients:</p>

        <div className="flex flex-row flex-wrap justify-center items-top gap-8 p-8">
          <div className="flex flex-col items-center gap-2 bg-gray-500 p-4 w-72">
            <p className="text-2xl">Customer Interaction</p>
            <div className="flex flex-row items-center space-x-4">
              <TbBrandOpenai size={60} />
            </div>
            <p>Use Large Language Models to generate social media interactions and automatically thank customers for their purchase, wish them good fortune with your product, and notify your team of unhappy customer interactions.</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-gray-500 p-4 w-72">
            <p className="text-2xl">Texture Generation</p>
            <FaImage size={60} />
            <p>Image Generation models are a great way to help your customers ideas come to life. With a little bit of pre-prompting and integration work we can make it easy for users to customize their own orders, no matter what industry you&apos;re in.</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-gray-500 p-4 w-72">
            <p className="text-2xl">Code Assistants</p>
            <FaLaptopCode size={60} />
            <p>While GPT-4 and many new open source models are fantastic at writing code, the most intelligent Programming Assistants today are actually LLM swarms that work together to review, document, test, commit, and deploy code like a Jr. Developer.</p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 max-w-6xl mx-auto px-10 footer-text">
          <p>At Master&apos;s Automation, we are committed to helping businesses of all sizes harness the power of AI to streamline operations, enhance productivity, and drive innovation. Our team of experienced AI specialists can analyze your business processes and identify areas where AI can be used to improve efficiency and reduce costs. We then work closely with you to develop and deploy custom AI solutions that meet your specific needs.</p>

          <p>One of the key benefits of working with Master&apos;s Automation is our deep understanding of AI inference models. We can identify the most appropriate models for your business and then deploy them seamlessly into your existing infrastructure. We also provide ongoing support to ensure that your AI solutions are always up-to-date and performing optimally.</p>

          <p>With Master&apos;s Automation, you can unlock the transformative power of AI and streamline your business processes, enhance productivity, and drive innovation across your organization. Allow us to help you experience the transformative power of AI inference tools and revolutionize your business processes at comparatively miniscule expense.</p>

          <Link href="/contact" className="btn btn-outline bg-red-500 text-black hover:text-white hover:bg-black mt-6 w-fit mx-auto px-8">What kind of intelligence do you need?</Link>
        </div>
      </div>
    </main >
  )
}
