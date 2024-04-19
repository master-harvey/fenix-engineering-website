'use client'

import Image from 'next/image'
import Link from 'next/link'

import cdk from '@/public/cdk-logo-small.png'

import { SiJavascript } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

export default function Page() {
  return (
    <main className="">
      <div className="mx-auto bg-laptop-terminal bg-right p-8">
        <div className="bg-gray-800 p-8 my-16 mx-auto max-w-lg lg:ml-[15%] md:ml-auto rounded-xl justify-center">
          <h1 className="text-4xl font-bold text-center p-4">How can custom software benefit you?</h1>
          <p className="mt-3">Many think that customized software is only for enterprises, but custom software could be the backbone of small businesses too. Master&apos;s Automation strives to show small and medium sized companies how affordable it can be.</p>
          <Link href="/contact" className="btn btn-outline bg-red-500 text-black hover:text-white hover:bg-black mt-6 w-full">Tell us what kind of software you need</Link>
        </div>
      </div>


      <div className="bg-gray-700 p-8">
        <p className="text-3xl font-bold text-center">Our Favorite Programming Languages</p>

        <div className="flex flex-row flex-wrap justify-center items-top gap-8 p-8">
          <div className="flex flex-col items-center gap-2 bg-gray-500 p-4 w-72">
            <p className="text-2xl">Frontend</p>
            <div className="flex flex-row items-center space-x-4">
              <SiJavascript size={60} />
              <p>&</p>
              <FaReact size={60} />
            </div>
            <p>When you need a program to be accessible anywhere, and on any platform, you need a web application. We think using the React ecosystem is currently the best way to build a web app.</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-gray-500 p-4 w-72">
            <p className="text-2xl">Backend</p>
            <FaPython size={60} />
            <p>The best all-around automation language. Python is the best way to &apos;talk&apos; to machines; it&apos;s capable of simple file manipulation, AI model training, and everything in between.</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-gray-500 p-4 w-72">
            <p className="text-2xl">Infrastructure</p>
            <div className="flex flex-row items-center space-x-4">
              <Image src={cdk} alt="CDK" className="m-0 p-0" />
              <p>&</p>
              <SiTerraform size={60} />
            </div>
            <p>Master&apos;s Automation is prepared to deploy code on managed servers, on-premise, or in the cloud. We utilize AWS CDK when possible and terraform everywhere else.</p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 max-w-6xl mx-auto px-10">
          <p>Master&apos;s Automation is prepared to help small and medium businesses embrace technology that they thought would be out of reach or unaffordable. Our team of experienced developers specializes in creating advanced web applications and understands that each business has unique needs, which is why we take a tailored approach to every project. We ensure that our solutions perfectly meet your specific requirements.</p>

          <p>At Master&apos;s Automation, we pride ourselves on staying at the forefront of technology and incorporating the latest advancements into our software development process. We have successfully integrated large language models (LLMs) and AI into our workflow in the form of AI programming-assistant agents that make it as if everyone has a personal junior developer at their side. These agents (that can not only write code but test it, document it, commit to version control, and deploy it) make for <del>a much faster and more effective delivery of automation solutions for our clients.</del> SAVINGS!</p>

          <p>Whether you need a custom video streaming platform, SaaS application, machine monitoring, or something more exotic, we have the expertise to deliver a custom solution that meets all your needs. Contact us today to learn more about how Master&apos;s Automation can help your business succeed with custom software solutions.</p>

          <Link href="/contact" className="btn btn-outline bg-red-500 text-black hover:text-white hover:bg-black mt-6 w-fit mx-auto px-8">What can we build for you?</Link>
        </div>
      </div>
    </main >
  )
}
