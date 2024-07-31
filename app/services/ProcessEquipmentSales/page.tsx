'use client'

import Image from 'next/image'
import Link from 'next/link'

import sunsource from '@/public/sunsource_logo.svg'
import hoseandrubber from '@/public/hoseandrubber_logo.png'
import mastersautomation from '@/public/Master_s Banner_white.png'

export default function Page() {
  return (
    <main className="dark text-white" data-theme="dark">

      <div className="mx-auto py-24 bg-cover px-4 bg-arm-and-press-brake bg-top">
        <div className="flex flex-col space-y-4 bg-gray rounded-xl p-2 mx-auto w-fit max-w-3xl">
          <h1 className="text-6xl text-center font-bold">Process Equipment Sales</h1>
          <p className="px-8 py-4 bg-red-400 w-fit mx-auto rounded-md text-black text-center">Fenix Engineering works with a variety of distributors and can help you source parts, and integrate new production lines entirely</p>
        </div>
      </div>

      <div className="bg-gray-700 py-10 px-4">
        <p className="text-xl mx-auto max-w-3xl mb-10 bg-gray-400 rounded-xl p-4">Given the supply-chain issues of the last few years finding spare parts for equipment has become increasingly difficult.  If you find yourself in that situation Fenix Engineering can aid you in your search.</p>
        <p className="text-xl mx-auto max-w-3xl mb-10 bg-gray-400 rounded-xl p-4">Fenix Engineering also supports Kawasaki industrial robotic arms. If your arm isn&apos;t working how you need it to, don&apos;t hesitate to contact us.</p>

        <div className="flex flex-col w-fit mx-auto gap-8 mt-8 items-center">
          <p className="text-center text-2xl px-12 max-w-2xl mt-8">We partner closely with the following providers:</p>

          <div className="flex flex-row items-center flex-wrap gap-8 w-fit justify-center">
            <Image src={sunsource} className="h-fit rounded-xl" width={125} height={125} alt="Sun Source" />
            <div className="flex flex-col w-full bg-gray-400 p-8 rounded-xl max-w-xl">
              <p className="text-2xl underline">SunSource</p>
              <p className="text-black">As a technically-focused distributor, SunSource serves as an extension of its customers&apos; team by providing value with design, technical understanding of product, streamlined supply chain, and a solutions-based approach to the needs of your application.</p>
            </div>
          </div>

          <div className="flex flex-row items-center flex-wrap gap-8 w-fit justify-center">
            <Image src={hoseandrubber} className="h-fit rounded-xl" width={125} height={125} alt="Sun Source" />
            <div className="flex flex-col w-full bg-gray-400 p-8 rounded-xl max-w-xl">
              <p className="text-2xl underline">Hose and Rubber</p>
              <p className="text-black">Hose & Rubber has been around for over forty years. Our trained staff has decades of experience in a variety of industries. We can assist with hydraulic, industrial, and automotive hose needs as well as with v-belt and power transmission products.</p>
            </div>
          </div>

          <div className="flex flex-row items-center flex-wrap gap-8 w-fit justify-center">
            <Image src={mastersautomation} className="h-fit rounded-xl" width={125} height={125} alt="Sun Source" />
            <div className="flex flex-col w-full bg-gray-400 p-8 rounded-xl max-w-xl">
              <p className="text-2xl underline">Master&apos;s Automation</p>
              <p className="text-black">If you need digital automation, IT services, or product testing and prototyping, then Master&apos;s Automation has everything you need. This partnership allows us to introduce automation to any physical or virtual process your business has.</p>
            </div>
          </div>

        </div>
      </div>

    </main>
  )
}
