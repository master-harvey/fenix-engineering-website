'use client'

import Image from 'next/image'
import Link from 'next/link'

import Carousel from "nuka-carousel"

import { FaLink } from "react-icons/fa";

import factoryLine from '@/public/factoryLine.jpg'

export default function Home() {
  // const [theme, setTheme] = useTheme()

  return (
    <main data-theme="dark" className="text-white">

      <Carousel className="max-h-[85vh]" autoplay={true} speed={1000} autoplayInterval={7000} wrapAround={true}>

        <div className="relative">
          <Image src={factoryLine} className="w-full h-fit max-h-screen object-cover" alt="image 1" />
          <div className="absolute sm:top-1/4 top-2 md:left-20 left-10 text-white bg-[#333] rounded-xl p-6">
            <p className="sm:text-4xl text-3xl font-bold">Are your machines working as hard as they can?</p>
            <p className="sm:text-xl font-bold max-w-2xl mt-4">We ensure that you get the most out of your technology, and that your people can focus on what&apos;s most important.</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute sm:top-1/4 top-2 md:left-20 left-10 text-white px-12">
            <p className="sm:text-4xl text-3xl font-bold">Do you have a mundane digital process?</p>
            <p className="md:text-xl font-bold max-w-2xl mt-4 xs:hidden">Let us show you how Robotic Process Automation can take care of it for you.</p>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col gap-4 absolute sm:top-1/4 top-2 md:left-20 left-10 text-white px-2">
            <p className="sm:text-4xl text-3xl font-bold">Is your business built for automation?</p>
            <p className="sm:text-xl font-bold max-w-2xl mt-4">We apply a Lean Six Sigma mindset to optimize business processes in preparation for automation.</p>
          </div>
        </div>
      </Carousel>

      <div className="flex flex-col p-8 justify-center">
        <p className="py-4 px-8 max-w-6xl mx-auto">At Fenix we pride ourselve in our ability to integrate automation solutions quickly, empowering businesses to thrive in the digital era. Our comprehensive suite of services is designed to elevate your business processes and maximize returns through cutting-edge automation technologies. Whether you&apos;re a small startup or an established enterprise, we tailor solutions that align with your unique needs.</p>
        <p className="py-4 px-8 max-w-6xl mx-auto">Here are just a couple of ways that Fenix could help a business that&apos;s ready to start to investing in technology:</p>

        <div className="indicator bg-gray-700 p-6 rounded-xl m-4 max-w-6xl mx-auto border-2 border-red-600 w-11/12">
          <Link href="/services/Design/CAD" className="indicator-item indicator-middle badge bg-red-600 p-3 text-white"><FaLink /></Link>
          <div>
            <p className="font-bold text-2xl text-gray-300">Robot Arm Integration</p>
            <p className="">We can help you take a product from napkin drawings to mass production. From conceptualizing product designs to creating realistic prototypes, we bring your ideas to life with precision and creativity. Our end-to-end approach ensures that every aspect of your product, from design to fabrication, is optimized for success. Trust us to turn your vision into reality and propel your products to new heights.</p>
          </div>
        </div>

        <div className="indicator bg-gray-700 p-6 rounded-xl m-4 max-w-6xl mx-auto border-2 border-red-700 w-11/12">
          <Link href="/services/OfficeAndIndustry/ProcessAnalysis" className="indicator-item indicator-middle badge bg-red-700 p-3 text-white"><FaLink /></Link>
          <div>
            <p className="font-bold text-2xl text-gray-300">Factory Line Design & Integration</p>
            <p className="">Uncover hidden potentials within your business operations through our meticulous Process Analysis service. We delve deep into your workflows, identifying areas primed for automation. By streamlining and optimizing your processes, we ensure increased efficiency, reduced operational costs, and enhanced overall productivity. Even if you&apos;re just setting up your production space, a process analysis will help you maximize your potential.</p>
          </div>
        </div>
      </div>
    </main >
  )
}