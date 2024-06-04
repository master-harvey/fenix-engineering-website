'use client'

import Image from 'next/image'
import Link from 'next/link'

import tank1 from '@/public/Tank-1.JPG'
import tank2 from '@/public/Tank-2.JPG'
import tank3 from '@/public/Tank-3.JPG'
import plating1 from '@/public/Sample-Matches.JPG'
import plating2 from '@/public/finished-samples.JPG'

import { MdArrowUpward, MdArrowDownward, MdFolderCopy, MdQueryBuilder } from "react-icons/md";

export default function Page() {
  return (
    <main className="dark text-white" data-theme="dark">

      <div className="mx-auto bg-big-plating-bath py-24 bg-cover px-4">
        <div className="flex flex-col space-y-4 bg-gray px-4 py-2 rounded-xl w-fit mx-auto">
          <h1 className="text-6xl text-center font-bold">Plating Solutions</h1>
          <p className="px-8 py-4 bg-red-400 w-fit mx-auto rounded-md text-black text-center">Are you having trouble with your plating system?</p>
        </div>
      </div>

      <div className="bg-gray-700 py-10 px-4">
        <p className="text-xl mx-auto max-w-3xl mb-10 bg-gray-400 rounded-xl p-4">Through wet titration we can analyze most controllables on your plating bath and make the necessary additions to optimize one&apos;s process.  Fenix Engineering understands often times it is not just one issue causing the problem in plating processes, but we&apos;ve seen it all.</p>

        <div className="flex flex-col w-full mx-auto gap-8 mt-8 items-center">

          <div className="flex flex-col w-full bg-gray-400 p-8 rounded-xl max-w-4xl gap-4">
            <p className="text-black text-2xl underline">Tank Cleaning and Plating bath care</p>
            <p className="text-black">Anything that the program needs to type, click, or interact with will need to be supplied in a very predictable manner. Reading data from a list in an excel spreadsheet, walking through calendar events, or even following a filesystem folder tree are all great starting points.</p>
            <div className="flex flex-row flex-wrap md:flex-nowrap items-center gap-2 justify-center rounded-xl">
              <Image src={tank1} alt="Tank 1" className="w-fit" width={250} />
              <Image src={tank2} alt="Tank 2" className="w-fit" width={250} />
              <Image src={tank3} alt="Tank 3" className="w-fit" width={250} />
            </div>
          </div>

          <div className="flex flex-col w-full bg-gray-400 p-8 rounded-xl max-w-4xl gap-4">
            <p className="text-black text-2xl underline">Troubleshooting &amp; Plating Bath Analysis</p>
            <p className="text-black">Anything that the program needs to type, click, or interact with will need to be supplied in a very predictable manner. Reading data from a list in an excel spreadsheet, walking through calendar events, or even following a filesystem folder tree are all great starting points.</p>
            <div className="flex flex-row flex-wrap md:flex-nowrap items-center gap-2 justify-center">
              <Image src={plating1} alt="Tank 1" className="w-fit rounded-xl" width={250} />
              <Image src={plating2} alt="Tank 2" className="w-fit rounded-xl" width={250} />
            </div>
          </div>

          <Link href="/contact" className="btn btn-outline bg-main text-black w-fit mx-auto hover:text-white hover:bg-black">Contact us to fix your plating system</Link>
        </div>
      </div>

    </main>
  )
}
