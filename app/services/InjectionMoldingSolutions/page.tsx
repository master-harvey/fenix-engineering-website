'use client'

import Image from 'next/image'
import Link from 'next/link'

import { MdArrowUpward, MdArrowDownward, MdFolderCopy, MdQueryBuilder } from "react-icons/md";

export default function Page() {
  return (
    <main className="dark text-white" data-theme="dark">

      <div className="mx-auto bg-injection-molding py-24 bg-cover px-4">
        <div className="flex flex-col space-y-4 bg-gray rounded-xl p-2 mx-auto w-fit max-w-3xl">
          <h1 className="text-6xl text-center font-bold">Injection Molding Solutions</h1>
          <p className="px-8 py-4 bg-red-400 w-fit mx-auto rounded-md text-black text-center">Complete simple, rule based, digital processes by simulating user input.</p>
        </div>
      </div>

      <div className="bg-gray-700 py-10 px-4">
        <p className="text-black text-xl mx-auto max-w-3xl mb-10 bg-gray-400 rounded-xl p-4">Fenix Engineering has worked with many manufacturers of PU metering equipment.  Even if we can&apos;t solve the problem, there is a good chance we know the people that can fix your machine and get you back online.</p>

        <div className="flex flex-col w-fit mx-auto gap-8 mt-8 items-center">
          <p className="text-center text-2xl px-12 max-w-2xl mt-8">Is your process ready for automation?</p>
        </div>
      </div>

    </main>
  )
}
