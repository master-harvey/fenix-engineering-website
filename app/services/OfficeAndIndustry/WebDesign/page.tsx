'use client'

import Image from 'next/image'

import configurator from '@/public/configurator_screenshot.png'
import woo from '@/public/woo.png'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="">
      <div className="mx-auto bg-gui-girl bg-center bg-cover p-8">
        <div className="w-fit p-4 my-16 mx-auto bg-gray-600 rounded-xl">
          <h1 className="text-6xl font-bold text-center p-4 pb-0">Every business needs a website</h1>
          <p className="text-2xl font-bold max-w-6xl text-center mt-6">High or Low traffic - Minuit or Monumental Complexity<br />Master&apos;s Automation can create a grand internet presence for your business.</p>
        </div>
      </div>
      <div className="bg-gray-700 flex flex-col justify-center">
        <div className="flex flex-row justify-center items-center p-8 flex-wrap-reverse gap-10">
          <Image src={woo} className='w-96 rounded-xl' alt="Wordpress & Odoo" />
          <div className="flex flex-col space-y-2 bg-gray-500 p-4 m-8 h-fit rounded-xl w-96">
            <p className="text-2xl font-bold">A Simple Web Presence</p>
            <p>Wordpress and other &apos;&apos;Website in a box&apos;&apos; software are great for most businesses that require little customization of their web site functionality. With these programs, an easy to use WYSIWIG editor is also usually available, allowing business managers to make changes without employing the help of a technician.</p>
          </div>
        </div>
        <p className="text-center max-w-3xl mx-10 md:mx-auto p-4 border-2 border-dashed rounded-xl">Master&apos;s Automation can help you deploy your website and configure it for the first time. Once it&apos;s fully set up we&apos;ll always be there for you, or you can make adjustments on your own.</p>
        <div className="flex flex-row justify-center items-center p-8 flex-wrap gap-10">
          <div className="flex flex-col space-y-2 bg-gray-500 p-4 m-8 h-fit rounded-xl w-96">
            <p className="text-2xl font-bold">Customized Experiences</p>
            <p>If you want to make a game, a web application that interacts heavily with other services, or simply require a custom interface, then Master&apos;s Automation can program a custom web application for you. While this is certainly a more expensive solution, this may be what&apos;s necessary to bring your ideas to life.</p>
          </div>
          <Link href="https://keypad.mastersautomation.tech/">
            <Image src={configurator} className='w-96 rounded-xl' alt="Grafana" />
          </Link>
        <div className="w-full text-center">
          <Link href="/contact" className="btn btn-outline bg-red-500 text-black w-fit hover:text-white hover:bg-black">What do you need on your website?</Link>
        </div>
        </div>
      </div>
    </main >
  )
}
