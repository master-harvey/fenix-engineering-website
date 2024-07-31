'use client'

import Image from 'next/image'
import Link from 'next/link'

import { MdArrowUpward, MdArrowDownward, MdFolderCopy, MdQueryBuilder } from "react-icons/md";

export default function Page() {
  return (
    <main className="dark text-white" data-theme="dark">

      <div className="mx-auto bg-rpa-desk py-24 bg-cover px-4">
        <div className="flex flex-col space-y-4">
          <h1 className="text-6xl text-center font-bold">Automation and Controls</h1>
          <p className="px-8 py-4 bg-red-400 w-fit mx-auto rounded-md text-black text-center">We can help you unlock the full potential of your production line</p>
        </div>
      </div>

      <div className="bg-gray-700 px-4">
        <p className="text-black text-xl mx-auto max-w-3xl mb-10 bg-gray-400 rounded-xl p-4">We provide a wide range of professional services to meet your needs. We can assist with PLC programming, new equipment integrations, VFD setup, general electronics troubleshooting, and much more.</p>

        <div className="flex flex-col w-fit mx-auto gap-8 mt-8 items-center">
          <p className="text-center text-2xl px-12 max-w-2xl mt-8">We specialize in error prevention</p>
          <p className="text-xl max-w-2xl mt-8">If your facility doesn&apos;t see the level of maintenance you&apos;d like to see then Fenix Engineering can put together a comprehensive maintenance plan for your business and provide the manpower to execute it, with minimal interruptions and downtime.</p>
        </div>
      </div>

    </main>
  )
}
