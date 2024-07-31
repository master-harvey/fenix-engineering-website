'use client'

import Image from 'next/image'
import Link from 'next/link'

import jimmy from '@/public/jimmy.jpg'
import fenix from '@/logo.png'

export default function Page() {
  return (
    <main className="py-10 text-white">
      <p className="text-4xl font-bold text-center">About Us</p>

      <div className="flex flex-col items-center p-8 gap-20">

        <div className="flex flex-row flex-wrap gap-8 items-center">
          <div className="flex flex-col sm:max-w-2xl xs:max-w-md mx-auto gap-4">
            <p>We have a developed a turnkey, principle driven approach to manufacturing process engineering. We bring Lean manufacturing principles and implement them for our customers. We offer both long and short -term solutions to our customers. Our approach encompasses all aspects of production, from the human factor to the machines used by those operators. Fenix Engineering can also help organizations explore new equipment or automation, through ROI analysis and/or opportunity cost reductions.</p>
            <p>Fenix Engineering is the “Alpha Predator” of highly automated industrial equipment. Our automation and controls team can troubleshoot across multiple platforms to get your manufacturing line back online. We are frontline integrators and understand PLC control logic and their interactions with industrial components.</p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap-reverse gap-8 items-center">
          <Image src={jimmy} alt="Jimmy Chase - President" className="sm:max-w-lg xs:max-w-md mx-auto" />
          <div className="flex flex-col sm:max-w-lg xs:max-w-mg mx-auto gap-4">
            <p className="text-4xl font-bold">Jimmy Chase - President</p>
            <p>I&apos;m a guy who has a passion for plating chemistry, tank design, and manufacturing engineering.</p>
            <Link href="/contact" className="btn btn-outline bg-red-500 text-black w-fit hover:text-white hover:bg-black">Let&apos;s talk about automating your business</Link>
          </div>
        </div>

      </div>

    </main>
  )
}
