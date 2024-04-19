'use client'

import Image from 'next/image'
import Link from 'next/link'

import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaAngleDoubleDown, FaCodeBranch, FaClock, FaRecycle } from "react-icons/fa";
import { GiTeamIdea, GiAtom } from "react-icons/gi";
import { LuSigma } from "react-icons/lu";
import { CgTrack } from "react-icons/cg";

export default function Page() {
  return (
    <main className="">

      <div className="mx-auto bg-process-analysis bg-center bg-cover p-8 py-20">
        <h1 className="text-6xl font-bold text-center p-4 pb-0">Process Analysis</h1>
      </div>

      <div className="bg-gray-600 p-4">
        <p className="text-center font-bold text-3xl mb-8">What&apos;s included?</p>
        <div className="flex flex-col space-y-4 justify-center items-center">

          <div className="bg-gray-500 w-11/12 lg:w-8/12 mx-auto p-8">
            <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
              <div className="flex flex-col justify-start w-fit">
                <p className="text-2xl font-bold text-gray-200">1. We create an extremely detailed Value Stream Map</p>
                <p className="text-lg">Our first order of business is getting to know your process. This map details which part of your company is responsible for each part of the customer experience. When it comes to how the value of your product or services comes together this document defines who, what, when, where, and how. We will reference back to this Value Stream Map as it constantly evolves with improvements, but the next step is to use this map to determine which Key Performance Indicators are most important to your business.</p>
              </div>
              <FaCodeBranch size={60} className="m-4 text-red-600" />
            </div>
          </div>
          <FaAngleDoubleDown size={60} className="m-4" />

          <div className="bg-gray-500 w-11/12 lg:w-8/12 mx-auto p-8">
            <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
              <div className="flex flex-col justify-start w-fit">
                <p className="text-2xl font-bold text-gray-200">2. Tracking of Key Performance Indicators</p>
                <p className="text-lg">The data never lies. After Master&apos;s Autoamtion automates KPI tracking and dashboarding you&apos;ll have your hand on the pulse of your business at all times. Real time data monitoring and forecasting can be like giving your business a CAT scan every minute, allowing you to repond to problems before they snowball.</p>
              </div>
              <CgTrack size={60} className="m-4 text-red-700" />
            </div>
          </div>
          <FaAngleDoubleDown size={60} className="m-4" />

          <div className="bg-gray-500 w-11/12 lg:w-8/12 mx-auto p-8">
            <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
              <div className="flex flex-col justify-start w-fit">
                <p className="text-2xl font-bold text-gray-200">3. Team Study</p>
                <p className="text-lg">Your team probably already has some great ideas to improve the workflow they&apos;re in, we like to hear from them first especially because team morale can have a butterfly effect on every square inch of the business.</p>
                <p className="text-lg">It&apos;s also important, however, to sensibly analyze your team&apos;s performance. By analyzing historical data you can scientifically determine things like which employees perform the best together or when employees hit a slump.</p>
              </div>
              <GiTeamIdea size={60} className="m-4 text-red-800" />
            </div>
          </div>
          <FaAngleDoubleDown size={60} className="m-4" />

          <div className="bg-gray-500 w-11/12 lg:w-8/12 mx-auto p-8">
            <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
              <div className="flex flex-col justify-start w-fit">
                <p className="text-2xl font-bold text-gray-200">4. Time Study</p>
                <p className="text-lg">Specifically we want to analyze your Value Added Time, and maximize it. Once a time study is conducted and some quality data can describe how time spent in different areas of the process will affect the user experience, improvements can be made to optimize the most expensive part of a process: it&apos;s timeline.</p>
              </div>
              <FaClock size={60} className="m-4 text-red-900" />
            </div>
          </div>
          <FaAngleDoubleDown size={60} className="m-4" />

          <div className="bg-gray-500 w-11/12 lg:w-8/12 mx-auto p-8">
            <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
              <div className="flex flex-col justify-start w-fit">
                <p className="text-2xl font-bold text-gray-200">5. Material Study (If Applicable)</p>
                <p className="text-lg">While some of our white collar clientelle don&apos;t really have <i>material</i> to track in the traditional sense, a material study looks at all of the consumable expenses your business incurs to produce your product. Tracking the affect of process changes is easiest to track on the material of your end product and often reveal the secrets to efficiency.</p>
              </div>
              <GiAtom size={60} className="m-4 text-red-950" />
            </div>
          </div>
          <FaAngleDoubleDown size={60} className="m-4" />

          <div className="bg-gray-500 w-11/12 lg:w-8/12 mx-auto p-8">
            <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
              <div className="flex flex-col justify-start w-fit">
                <p className="text-2xl font-bold text-gray-200">6. Apply a Six-Sigma Mindset</p>
                <p className="text-lg">Six-Sigma experts claim that reducing variability in a process is the key to producing a better quality product or service, more often, reduce maintenance and repair expenditure, maximize time efficiency... AND THEY&apos;RE RIGHT. Even if your business isn&apos;t the typical factory line that Six-Sigma was designed for, the principles of efficient work remain the same. After an in depth analysis of your team, value added time, and material, we&apos;ll likely have a few small changes that could yield huge returns.</p>
              </div>
              <LuSigma size={60} className="m-4 text-black" />
            </div>
          </div>
          <FaAngleDoubleDown size={60} className="m-4" />

          <div className="bg-gray-500 w-11/12 lg:w-8/12 mx-auto p-8">
            <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
              <div className="flex flex-col justify-start w-fit">
                <p className="text-2xl font-bold text-gray-200">7. Apply a Lean Mindset</p>
                <p className="text-lg">Lean is the study of doing more with less and is the last step because only once we fully understand your process can we determine what might not be necessary, how time or material could be conserved, and ultimately how we can stretch our limits <b>without</b> affecting the end quality.</p>
              </div>
              <FaRecycle size={60} className="m-4 text-green-500" />
            </div>
          </div>

          <MdOutlineConnectWithoutContact size={60} className="m-4" />

          <div className="flex flex-row flex-wrap justify-between items-center gap-4 border-2 border-white border-dashed rounded-xl w-8/12 mx-auto p-8">
            <div className="flex flex-col w-fit">
              <p className="text-2xl font-bold">A full process analysis may take some time.</p>
              <p className="font-bold w-fit">Contact us to get started as soon as possible on your optimization project.</p>
            </div>
            <Link href="/contact" className="btn btn-outline bg-red-500 text-black hover:text-white hover:bg-black">Contact Us</Link>
          </div>

        </div>
      </div>

    </main>
  )
}
