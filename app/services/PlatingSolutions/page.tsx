'use client'

import Image from 'next/image'
import Link from 'next/link'

import { MdArrowUpward, MdArrowDownward, MdFolderCopy, MdQueryBuilder } from "react-icons/md";

export default function Page() {
  return (
    <main className="dark text-white" data-theme="dark">

      <div className="mx-auto bg-rpa-desk py-24 bg-cover px-4">
        <div className="flex flex-col space-y-4">
          <h1 className="text-6xl text-center font-bold">Plating Solutions</h1>
          <p className="px-8 py-4 bg-red-400 w-fit mx-auto rounded-md text-black text-center">Are you having trouble with your plating system?</p>
        </div>
      </div>

      <div className="bg-gray-700 py-10 px-4">
        <p className="text-black text-xl mx-auto max-w-3xl mb-10 bg-gray-400 rounded-xl p-4">Through wet titration we can analyze most controllables on your plating bath and make the necessary additions to optimize one&apos;s process.  Fenix Engineering understands often times it is not just one issue causing the problem in plating processes, but we&apos;ve seen it all.</p>

        <div className="flex flex-col w-fit mx-auto gap-8 mt-8 items-center">
          <p className="text-center px-12 max-w-2xl border-2 border-red-500 rounded-xl border-dashed p-4">Master&apos;s Automation can help you evaluate the processes your business is composed of, and help determine what role automation technology could play at your business.</p>

          <p className="text-center text-2xl px-12 max-w-2xl mt-8">Is your process ready for automation?</p>

          <div className="flex flex-row items-center flex-wrap gap-8 w-fit justify-center">
            {/* <Image src={rpa1} className="w-full h-fit rounded-xl max-w-xl" alt="RPA1" /> */}
            <div className="flex flex-col w-full bg-gray-400 p-8 rounded-xl max-w-xl">
              <p className="text-black text-2xl text-right mr-6 underline">Tank Cleaning and Plating bath care</p>
              <p className="text-black">Anything that the program needs to type, click, or interact with will need to be supplied in a very predictable manner. Reading data from a list in an excel spreadsheet, walking through calendar events, or even following a filesystem folder tree are all great starting points.</p>
            </div>
          </div>

          <div className="flex flex-row items-center flex-wrap-reverse gap-8 mx-auto w-fit justify-center">
            <div className="flex flex-col w-full bg-gray-400 p-8 rounded-xl max-w-xl">
              <p className="text-black text-2xl ml-6 underline">Troubleshooting &amp; Plating Bath Analysis</p>
              <p className="text-black">Anything that the program needs to type, click, or interact with will need to be supplied in a very predictable manner. Reading data from a list in an excel spreadsheet, walking through calendar events, or even following a filesystem folder tree are all great starting points.</p>
            </div>
            {/* <Image src={rpa2} className="w-full h-fit rounded-xl max-w-xl" alt="RPA2" /> */}
          </div>

          <Link href="/contact" className="btn btn-outline bg-red-500 text-black w-fit mx-auto hover:text-white hover:bg-black">Contact us to Automate your GUI process</Link>
        </div>
      </div>

    </main>
  )
}
