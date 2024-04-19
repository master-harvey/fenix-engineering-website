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
      <div className="mx-auto bg-servers bg-left-top bg-no-repeat py-20 px-4">
        <div className="bg-gray-800 p-8 mx-auto max-w-lg rounded-xl justify-center">
          <h1 className="text-4xl font-bold text-center p-4">Server Administration</h1>
          <p className="mt-3">No matter what computing service you need, or where you need it, Master&apos;s Automation can help you deploy it there. Whether you require on-premise servers for maximum control and security, or leverage the flexibility and scalability of the cloud, we have the expertise to ensure your servers are operating at peak performance.</p>
        </div>
      </div>

      <div className="bg-gray-700 p-8">
        <p className="text-2xl font-bold text-center">The Backbone of Automation</p>
        <p className="max-w-6xl mx-auto px-10">At Master&apos;s Automation, we understand the critical role servers play in powering your business. That&apos;s why we offer comprehensive server management services, tailored to your specific needs and environment. Whether your business requires on-premise servers for maximum control and security, or you need to leverage the flexibility and scalability of the cloud, we can ensure we&apos;ll have your servers and services operating with peak performance, security, and durability.</p>

        <div className="flex flex-row flex-wrap justify-center items-top gap-8 p-8">
          <div className="flex flex-col items-center gap-2 bg-gray-500 p-4 w-72">
            <p className="text-2xl">On-Prem Servers</p>
            <div className="flex flex-row items-center space-x-4">
              <TbBrandOpenai size={60} />
            </div>
            <p>We can help you select a system or build one from the ground up before deploying it wherever you need it. Master&apos;s Automation can bring you everything from high power virtualization to just a computer on a chip.</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-gray-500 p-4 w-72">
            <p className="text-2xl">Remote Hands</p>
            <FaImage size={60} />
            <p>Just need someone to touch up your server rack? Don&apos;t want to waste an employee&apos;s time with a trip to the datacenter? We provide a &apos;&apos;Remote Hands&apos;&apos; service to manage your servers when you can&apos;t or don&apos;t want to.</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-gray-500 p-4 w-72">
            <p className="text-2xl">Virtual Servers</p>
            <FaLaptopCode size={60} />
            <p>Companies of all sizes are starting to realize the immense power of the cloud. Master&apos;s Automation is certified to bring you cost and compute efficient solutions using single and multi-cloud server architectures.</p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 max-w-6xl mx-auto px-10 footer-text">
          <Link href="/contact" className="btn btn-outline bg-red-500 text-black hover:text-white hover:bg-black mt-6 w-fit mx-auto px-8">Talk to us about what you need deployed</Link>
          <p>At Master&apos;s Automation, we know that servers and mechanization in general have become integral to making profits in the 21st century. We truly seek to understand every business at it&apos;s core so that we can be sure to lead your business down the right path. Whether you need the control and security of on-premise servers or the flexibility and scalability of the cloud, our team of qualified professionals is here to ensure your servers are operating at peak performance, and that your technology keeps your business firing on all cylinders.</p>
        </div>
      </div>


      <div className="mx-auto bg-ai bg-left-top bg-no-repeat py-8 px-4">
        <div className="bg-gray-800 p-8 mx-auto max-w-lg rounded-xl justify-center">
          <h1 className="text-4xl font-bold text-center p-4">Server-less?</h1>
          <p className="mt-3">The term &apos;&apos;Serverless&apos;&apos; is a bit of a misnomer. Computing hasn&apos;t changed, we still need servers, but who uses their own these days? Many cloud services charge you only for what you use, and offer generous free tiers for small and medium businesses allowing you to easily scale your resource allocation and spending based on client demand.</p>
        </div>
      </div>

      <div className="bg-gray-700 p-8">
        <p className="max-w-6xl mx-auto px-10">We&apos;ve already deployed our own SaaS apps with serverless architecture and are masters of infrastructure-as-code and full stack development. Whether you have a serverless architecture in place already or need one just for you, Master&apos;s Automation can help you get where you need to go.</p>
        <div className="flex flex-col space-y-6 max-w-6xl mx-auto px-10 footer-text">
          <Link href="/contact" className="btn btn-outline bg-red-500 text-black hover:text-white hover:bg-black mt-6 w-fit mx-auto px-8">Should your business go serverless?</Link>
        </div>
      </div>
    </main>
  )
}
