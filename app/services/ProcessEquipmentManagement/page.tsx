'use client'

import Image from 'next/image'
import Link from 'next/link'

import { MdArrowUpward, MdArrowDownward, MdFolderCopy, MdQueryBuilder } from "react-icons/md";

export default function Page() {
  return (
    <main className="dark text-white" data-theme="dark">

      <div className="mx-auto bg-rpa-desk py-24 bg-cover px-4">
        <div className="flex flex-col space-y-4">
          <h1 className="text-6xl text-center font-bold">Process Equipment Management</h1>
          <p className="px-8 py-4 bg-red-400 w-fit mx-auto rounded-md text-black text-center">Is your production environment firing on all cylinders?</p>
        </div>
      </div>

      <div className="bg-gray-700 py-10 px-4">
        <p className="text-black text-xl mx-auto max-w-3xl mb-10 bg-gray-400 rounded-xl p-4">Fenix Engineering develops turnkey, OEM compliant, preventative maintenance plans for all of your process equipment.  We can either train your on-site personnel to perform the work or we can maintain the program with our technicians.  We work directly with the OEM and strive to have great vender relationships.</p>

        <div className="flex flex-row flex-wrap items-top justify-center gap-8 mb-8">
          <div className="flex flex-col items-center align-middle w-48 border-2 border-red-600 bg-gray-800 rounded-xl p-4 gap-2">
            <MdArrowUpward size={40} />
            <p className="text-xl underline">Train</p>
            <p>We will train your employees to get the most out of your equipment</p>
          </div>
          <div className="flex flex-col items-center align-middle w-48 border-2 border-red-800 bg-gray-800 rounded-xl p-4 gap-2">
            <MdArrowDownward size={40} />
            <p className="text-xl underline">Maintain</p>
            <p>Fenix can maintain your equipment if you don&apos;t have the staff to do so</p>
          </div>
          <div className="flex flex-col items-center align-middle w-48 border-2 border-red-950 bg-gray-800 rounded-xl p-4 gap-2">
            <MdFolderCopy size={40} />
            <p className="text-xl text-center underline">Reliability</p>
            <p>We will ensure your equipment works longer and harder than expected</p>
          </div>
          <div className="flex flex-col items-center align-middle w-48 border-2 border-black bg-gray-800 rounded-xl p-4 gap-2">
            <MdQueryBuilder size={40} />
            <p className="text-xl underline">Peace of Mind</p>
            <p>With our team of technicians at your side you&apos;ll never worry about uptime</p>
          </div>
        </div>
        <hr className="mx-auto w-[50%]" />
        <div className="flex flex-col w-fit mx-auto gap-8 mt-8 items-center">
          <p className="text-center text-3xl px-12 max-w-2xl border-2 border-co rounded-xl border-dashed p-4">Emergency Maintenance Services</p>

          <div className="flex flex-col w-full bg-gray-400 p-8 rounded-xl max-w-xl">
            <p className="text-black text-2xl ml-6 underline">We&apos;re here for you; rain or shine</p>
            <p className="text-black">Fenix Engineering understands that even when you take care of your equipment, things are going to break from time to time, and those times can be inconvenient at best.  We can service electrical, hydraulic, and pneumatic systems even at times when nobody else wants to.</p>
          </div>

          <Link href="/contact" className="btn btn-outline bg-red-500 text-black w-fit mx-auto hover:text-white hover:bg-black">Contact us to Automate your GUI process</Link>
        </div>
      </div>

    </main>
  )
}
