'use client'

import Image from 'next/image'
import Link from 'next/link'

import Carousel from "nuka-carousel"

import { FaLink } from "react-icons/fa";

import factoryLine from '@/public/factoryLine.jpg'
import platingSolutions from '@/public/big-plating-bath-banner.png'
import automationControls from '@/public/automation-controls-banner.jpg'

export default function Home() {
  // const [theme, setTheme] = useTheme()

  return (
    <main data-theme="dark" className="text-white">

      <Carousel className="max-h-[85vh]" autoplay={true} speed={1000} autoplayInterval={7000} wrapAround={true}>

        <div className="relative">
          <Image src={factoryLine} className="w-full h-fit object-cover" alt="image 1" />
          <div className="absolute sm:top-1/4 top-2 md:left-20 left-10 text-white bg-[#333] rounded-xl p-6 mx-10">
            <p className="sm:text-4xl text-3xl font-bold">Is your facility underproducing?</p>
            <p className="sm:text-xl font-bold max-w-2xl mt-4">We ensure that you get the most out of your technology, and that your production line stays running</p>
          </div>
        </div>

        <div className="relative">
          <Image src={platingSolutions} className="w-fit h-fit bg-cover" alt="image 2" />
          <div className="absolute sm:top-1/4 top-2 md:left-20 left-10 text-white bg-[#333] rounded-xl p-6 max-w-2xl mx-10">
            <p className="sm:text-4xl text-3xl font-bold">Could your plating process be more effective AND more efficient?</p>
            <p className="md:text-xl font-bold max-w-2xl mt-4 xs:hidden">We are Colorado&apos;s finest plating solutions provider</p>
          </div>
        </div>

        <div className="relative">
          <Image src={automationControls} className="w-full h-fit object-cover" alt="image 3" />
          <div className="flex flex-col gap-4 absolute sm:top-1/4 top-2 md:left-20 left-10 text-white bg-[#333] rounded-xl p-6 mx-10">
            <p className="sm:text-4xl text-3xl font-bold">Machines got you down?</p>
            <p className="sm:text-xl font-bold max-w-2xl mt-4">We are here for your business day and night, rain or shine</p>
          </div>
        </div>
      </Carousel>

      <div className="flex flex-col p-8 justify-center">
        <p className="py-4 px-8 max-w-6xl mx-auto">At Fenix we pride ourselve in our ability to integrate automation solutions quickly, empowering businesses to thrive in the digital era. Our comprehensive suite of services is designed to elevate your business processes and maximize returns through cutting-edge automation technologies. Whether you&apos;re a small startup or an established enterprise, we tailor solutions that align with your unique needs.</p>
        <p className="py-4 px-8 max-w-6xl mx-auto">Here are just a couple of ways that Fenix could help a business that&apos;s ready to start to investing in technology:</p>

        <div className="indicator bg-gray-700 p-6 rounded-xl m-4 max-w-6xl mx-auto border-2 border-red-700 w-11/12 border-mainShade-300 bg-dark-gray">
          <Link href="/services/ProcessEquipmentManagement" className="indicator-item indicator-middle badge bg-red-700 p-3 text-white border-mainShade-300"><FaLink /></Link>
          <div>
            <p className="font-bold text-2xl text-gray-300">Maintenance and Management of Process Equipment</p>
            <p className="">At Fenix Engineering, we understand the critical role that well-maintained process equipment plays in your production line. Our comprehensive maintenance and management services ensure that your equipment operates at peak efficiency, minimizing downtime and maximizing productivity. Our team of experienced engineers conducts regular inspections, preventive maintenance, and timely repairs to keep your operations running smoothly. Trust us to enhance the longevity and reliability of your machinery, allowing you to focus on what you do best—delivering top-quality products to your customers.</p>
          </div>
        </div>

        <div className="indicator bg-gray-700 p-6 rounded-xl m-4 max-w-6xl mx-auto border-2 border-red-700 w-11/12 border-mainShade-400 bg-dark-gray">
          <Link href="/services/ProcessEquipmentSales" className="indicator-item indicator-middle badge bg-red-700 p-3 text-white border-mainShade-400"><FaLink /></Link>
          <div>
            <p className="font-bold text-2xl text-gray-300">Process Equipment Sales</p>
            <p className="">Fenix Engineering is a trusted partner for high-quality process equipment sales. We offer a wide range of state-of-the-art machinery and equipment tailored to meet the unique needs of your industrial operations. Whether you&apos;re looking to upgrade your current equipment or set up a new production line, our expert team will guide you through the selection process, ensuring you get the best solutions for your business. Explore our extensive inventory and discover how our advanced process equipment can boost your efficiency, productivity, and overall operational success.</p>
          </div>
        </div>

        <div className="indicator bg-gray-700 p-6 rounded-xl m-4 max-w-6xl mx-auto border-2 border-red-700 w-11/12 border-mainShade-500 bg-dark-gray">
          <Link href="/services/InjectionMoldingSolutions" className="indicator-item indicator-middle badge bg-red-700 p-3 text-white border-mainShade-500"><FaLink /></Link>
          <div>
            <p className="font-bold text-2xl text-gray-300">Injection Molding Solutions</p>
            <p className="">Fenix Engineering excels in providing top-tier Injection Molding Solutions tailored to meet your unique production needs. Utilizing the latest technology and our extensive expertise, we guide you from initial design through to mass production. Our precise and efficient injection molding processes ensure consistent quality and optimal performance of your plastic components. Whether you need prototyping or full-scale manufacturing, rely on us to deliver cost-effective, high-precision results that align perfectly with your specifications.</p>
          </div>
        </div>

        <div className="indicator bg-gray-700 p-6 rounded-xl m-4 max-w-6xl mx-auto border-2 border-red-700 w-11/12 border-mainShade-700 bg-dark-gray">
          <Link href="/services/PlatingSolutions" className="indicator-item indicator-middle badge bg-red-700 p-3 text-white border-mainShade-700"><FaLink /></Link>
          <div>
            <p className="font-bold text-2xl text-gray-300">Electroplating Solutions</p>
            <p className="">Achieve superior surface finishes and enhanced durability with Fenix Engineering&apos;s Electroplating Solutions. Our advanced electroplating services cater to a wide range of industries, providing customized coating solutions that improve the performance and aesthetics of your products. Our team of skilled technicians employs state-of-the-art equipment and techniques to deliver consistent, high-quality results. Whether you need corrosion resistance, wear resistance, or decorative finishes, our electroplating solutions will exceed your expectations and add value to your products.</p>
          </div>
        </div>

        <div className="indicator bg-gray-700 p-6 rounded-xl m-4 max-w-6xl mx-auto border-2 border-red-600 w-11/12 border-mainShade-900 bg-dark-gray">
          <Link href="/services/AutomationAndControls" className="indicator-item indicator-middle badge bg-red-600 p-3 text-white border-mainShade-900"><FaLink /></Link>
          <div>
            <p className="font-bold text-2xl text-gray-300">Industrial Automation and Controls</p>
            <p className="">Transform your production capabilities with Fenix Engineering&apos;s Industrial Automation and Controls. Our advanced automation solutions are designed to optimize your manufacturing processes, increase operational efficiency, and reduce costs. We specialize in implementing sophisticated control systems that enhance precision and reliability across your operations. Whether you&apos;re looking to automate assembly lines or integrate complex monitoring systems, our tailored solutions ensure seamless performance and a competitive edge in your industry.</p>
          </div>
        </div>
      </div>

    </main >
  )
}