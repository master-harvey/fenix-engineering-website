'use client'

import Image from 'next/image'
import Link from 'next/link'

import jimmy from '../../public/jimmy.jpg'

export default function Page() {
  return (
    <main className="py-10">
      <p className="text-4xl font-bold text-center">About Us</p>
      <p className="text-xl font-bold text-center">We do work</p>

      <div className="flex flex-col items-center p-8 gap-20">

        <div className="flex flex-row flex-wrap gap-8 items-center">
          <div className="flex flex-col sm:max-w-lg xs:max-w-mg mx-auto gap-4">
            <p>We are a team of passionate people whose goal is to revolutionize work, via automation. In business you need to maximize the value you can provide, in the 21st century that means leveraging machines and computing to the fullest extent so that the people in business only need to focus on what is required.</p>
            <p>Our products are designed for small to medium size companies willing to optimize their performance. Your business can take advantage of technology the same way that huge corporations do, but in an economical way, with Fenix.</p>
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
